// system includes
#include <iostream>
#include <sstream>

// library includes
#include <QApplication>
#include <QCheckBox>
#include <QCommandLineParser>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QFileInfo>
#include <QLibraryInfo>
#include <QMessageBox>
#include <QPushButton>
#include <QTranslator>
extern "C" {
    #include <appimage/appimage.h>
}
#include <appimage/update/qt-ui.h>

// local includes
#include "shared.h"
#include "translationmanager.h"


int main(int argc, char** argv) {
    QCommandLineParser parser;
    parser.setApplicationDescription(QObject::tr("给使用Linux针对集成进的Appimage进行升级"));

    QApplication app(argc, argv);
    QApplication::setApplicationDisplayName(QObject::tr("AppImage管理器升级", "升级帮助程序名儿"));
    QApplication::setWindowIcon(QIcon(":/AppImageLauncher.svg"));

    std::ostringstream version;
    version << "version " << APPIMAGELAUNCHER_VERSION << " "
            << "(git commit " << APPIMAGELAUNCHER_GIT_COMMIT << "), built on "
            << APPIMAGELAUNCHER_BUILD_DATE;
    QApplication::setApplicationVersion(QString::fromStdString(version.str()));

    // install translations
    TranslationManager translationManager(app);

    parser.addHelpOption();
    parser.addVersionOption();

    parser.process(app);

    parser.addPositionalArgument("path", "Path to AppImage", "<path>");

    if (parser.positionalArguments().empty()) {
        parser.showHelp(1);
    }

    const auto pathToAppImage = parser.positionalArguments().first();

    auto criticalUpdaterError = [](const QString& message) {
        QMessageBox::critical(nullptr, "错误", message);
    };

    if (!QFile(pathToAppImage).exists()) {
        criticalUpdaterError(QString::fromStdString(QObject::tr("错误：无此文件或目录: %1").arg(pathToAppImage).toStdString()));
        return 1;
    }

    const auto type = appimage_get_type(pathToAppImage.toStdString().c_str(), false);

    if (type <= 0 || type > 2) {
        criticalUpdaterError(QObject::tr("这不是AppImage: %1").arg(pathToAppImage));
        return 1;
    }

    appimage::update::qt::QtUpdater updater(pathToAppImage);
    updater.enableRunUpdatedAppImageButton(false);

    std::ostringstream updaterStatusMessages;

    updater.connect(
        &updater,
        &appimage::update::qt::QtUpdater::newStatusMessage,
        &updater,
        [&updater, &updaterStatusMessages](const std::string& newMessage) {
            if (!(updaterStatusMessages.tellp() <= 0))
                updaterStatusMessages << std::endl;

            updaterStatusMessages << newMessage;
        }
    );

    auto updateCheckResult = updater.checkForUpdates();

    switch (updateCheckResult) {
        case 1:
            // update available, continue after switch block
            break;
        case 0: {
            QMessageBox::information(
                nullptr,
                QObject::tr("无可用更新"),
                QObject::tr("无可用更新对此 AppImage %1").arg(pathToAppImage)
            );
            return 0;
        }
        case -1: {
            QMessageBox::information(
                nullptr,
                QObject::tr("无升级信息"),
                QObject::tr("无法在此 AppImage内发现升级信息:\n%1"
                            "\n"
                            "\n"
                            "此Appimage不支持无缝更新。请联系作者添加升级信息以支持无缝升级 ").arg(pathToAppImage)
            );
            return 0;
        }
        default: {
            QMessageBox::information(
                nullptr,
                QObject::tr("错误："),
                QObject::tr("无法为:\n\n%1 检查更新").arg(updaterStatusMessages.str().c_str())
            );
            return 1;
        }
    }

    // clear existing status messages before performing the actual update
    updaterStatusMessages.clear();

    bool removeAfterUpdate = false;

    {
        const auto message = QObject::tr("发现更新 %1").arg(pathToAppImage) +
                             "\n\n" +
                             QObject::tr("是否升级?") + "\n";

        QMessageBox messageBox(QMessageBox::Icon::Question, "发现更新", message, QMessageBox::Ok | QMessageBox::Cancel);

        QCheckBox removeCheckBox(QObject::tr("在更新完成后移除先前版本的Appimage"));
        removeCheckBox.setChecked(false);

        messageBox.setCheckBox(&removeCheckBox);

        switch (messageBox.exec()) {
            case QMessageBox::Ok:
                break;
            default:
                return 0;
        }

        removeAfterUpdate = removeCheckBox.isChecked();
    }

    checkAuthorizationAndShowDialogIfNecessary(pathToAppImage, "仍然升级?");

    auto rv = updater.exec();

    // if the update has failed, return immediately
    if (rv != 0) {
        QMessageBox::information(
            nullptr,
            QObject::tr("错误："),
            QObject::tr("下列程序升级失败:\n\n%1").arg(updaterStatusMessages.str().c_str())
        );

        return rv;
    }

    // get path to new file, un-integrate old file, remove it, and register updated AppImage
    QString pathToUpdatedAppImage;

    if (!updater.pathToNewFile(pathToUpdatedAppImage))
        return 1;

    // sanity check
    if (!QFile::exists(pathToUpdatedAppImage)) {
        criticalUpdaterError(QObject::tr("升级文件不存在: %1").arg(pathToUpdatedAppImage));
        return 1;
    }

    const auto pathToIntegratedAppImage = buildPathToIntegratedAppImage(pathToAppImage);

    if (!appimage_shall_not_be_integrated(pathToAppImage.toStdString().c_str())) {
        if (!installDesktopFileAndIcons(pathToUpdatedAppImage)) {
            criticalUpdaterError(QObject::tr("无法安装升级后的Appimage"));
            return 1;
        }
    }

    // a crappy attempt to prevent deletion of the updated AppImage in a rare case (see below)
    const auto pathToIntegratedUpdatedAppImage = buildPathToIntegratedAppImage(pathToUpdatedAppImage);

    if (removeAfterUpdate) {
        // make sure not to delete the updated(!) AppImage if the filenames of the new and old file are equal
        // in this case, a warning is shown, asking the user whether to overwrite the old file, and in that case we
        // don't need to unregister nor delete the file
        if (pathToIntegratedAppImage != pathToIntegratedUpdatedAppImage) {
            if (appimage_unregister_in_system(pathToAppImage.toStdString().c_str(), false) != 0) {
                criticalUpdaterError(QObject::tr("无法删除旧版本"));
                return 1;
            }

            if (!QFile::remove(pathToAppImage)) {
                criticalUpdaterError(QObject::tr("无法移除Appimage"));
                return 1;
            }
        }
    }

    // we're done!
    return 0;
}
