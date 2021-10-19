// system headers
#include <iostream>

// library headers
#include <QDebug>
#include <QDir>
#include <QLibraryInfo>
#include <QString>

// local headers
#include <shared.h>
#include "translationmanager.h"

TranslationManager::TranslationManager(QCoreApplication& app) : app(app) {
    // set up translations
    auto qtTranslator = new QTranslator();
    qtTranslator->load(getTranslationFile());
    app.installTranslator(qtTranslator);

    // store translators in list so they won't be deleted
    installedTranslators.push_back(qtTranslator);
}

TranslationManager::~TranslationManager() {
    for (auto& translator : installedTranslators) {
        delete translator;
        translator = nullptr;
    }
}

QString TranslationManager::getTranslationDir() {
    // first we need to find the translation directory
    // if this is run from the build tree, we try a path that can only work within the build directory
    // then, we try the expected install location relative to the main binary
    const auto binaryDirPath = QApplication::applicationDirPath();

    // previously the path to the repo root dir was embedded to allow for finding the compiled translations
    // this lead to irreproducible builds
    // therefore the files are now generated within the build dir, and we guess the path based on the binary location
    auto translationDir = binaryDirPath + "/../../i18n/generated/l10n";

    // when the application is installed, we need to look for the files in the private data directory
    if (!QDir(translationDir).exists()) {
        auto privateDataDir = pathToPrivateDataDirectory();
        if (!privateDataDir.isEmpty()) {
            translationDir = privateDataDir + "/l10n";
        }
    }

    // give the user (and dev) some feedback whether the translations could actually be found or not
    if (!QDir(translationDir).exists()) {
        std::cerr << "[AppImageLauncher] Warning: "
                  << "Translation directory could not be found, translations are likely not available" << std::endl;
    }

    return translationDir;
}
QString TranslationManager::getTranslationFile(){
    const auto systemLocale = QLocale::system().name(); //Get system current locale .This would print like zh_CN
    const auto translationFileDir = getTranslationDir() + "/ui." + systemLocale + ".qm";   //Get the translation file path
    return translationFileDir;
}
