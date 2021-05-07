// libraries
#include <QApplication>

// local
#include <translationmanager.h>
#include <shared.h>
#include "settings_dialog.h"

int main(int argc, char** argv) {
    QApplication app(argc, argv);
    QApplication::setApplicationDisplayName("AppImage启动器设置");
    QApplication::setWindowIcon(QIcon(":/AppImageLauncher.svg"));
    QTranslator qtTranslator;
<<<<<<< HEAD
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
=======
    qttranslator.load("qt_" + QLocale::system().name(),QLibraryInfo::location(QLibraryInfo::TranslationsPath));
    app.installTranslator( &qtTranslator );
    TranslationManager mgr(app);
>>>>>>> parent of 19773dc (added QlibraryInfo)
//
//    // we ship some very basic fallbacks for icons used in the settings dialog
//    // this should fix missing icons on some distros

    SettingsDialog dialog;

    setUpFallbackIconPaths(&dialog);

    dialog.show();

    return app.exec();
}
