// libraries
#include <QApplication>
#include <QLibraryInfo>
#include <QDebug>

// local
#include <translationmanager.h>
#include <shared.h>
#include "settings_dialog.h"

int main(int argc, char** argv) {
    QApplication app(argc, argv);
    QApplication::setApplicationDisplayName("AppImage启动器设置");
    QApplication::setWindowIcon(QIcon(":/AppImageLauncher.svg"));
    QTranslator qtTranslator;
    if (qtTranslator.load(QLocale::system(),
                "qt", "_",
                QLibraryInfo::location(QLibraryInfo::TranslationsPath)))
    {
        qDebug() << "qtTranslator ok";
        app.installTranslator(&qtTranslator);
    }

    QTranslator qtBaseTranslator;
    if (qtBaseTranslator.load("qtbase_" + QLocale::system().name(),
                QLibraryInfo::location(QLibraryInfo::TranslationsPath)))
    {
        qDebug() << "qtBaseTranslator ok";
        app.installTranslator(&qtBaseTranslator);
    }
//
//    // we ship some very basic fallbacks for icons used in the settings dialog
//    // this should fix missing icons on some distros

    SettingsDialog dialog;

    setUpFallbackIconPaths(&dialog);

    dialog.show();

    return app.exec();
}
