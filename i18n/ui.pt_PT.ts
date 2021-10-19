<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_PT">
<context>
    <name>FirstRunDialog</name>
    <message>
        <location filename="../src/ui/first-run.ui" line="+20"/>
        <source>First run</source>
        <translation>Primeira execução</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Welcome to AppImageLauncher!&lt;/span&gt;&lt;/p&gt;&lt;p&gt;This little helper is designed to improve your AppImage experience on your computer.&lt;/p&gt;&lt;p&gt;It appears you have never run AppImageLauncher before. Please take a minute and configure your preferences. You can always change these later on, using the control panel.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;O AppImageLauncher agora está ativo no seu sistema!&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Esperamos que melhore a experiência AppImage no seu computador, ao armazenar as AppImages que instalar numa única pasta e ao adicionar entradas correspondentes ao seu lançador de aplicações.&lt;/p&gt;&lt;p&gt;Não foi possível encontrar um ficheiro de configuração; será criado um automaticamente com as suas selecções a seguir. Pode sempre alterar estas configurações mais tarde, ao lançar AppImageLauncher Settings.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Ask me whether to move new AppImages into a central location</source>
        <translation>Pedir para mudar as AppImages detectados novamente para a pasta de gestão</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Integration target destination directory:</source>
        <translation>Pasta para armazenar AppImages geridos:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Customize</source>
        <translation>Personalizar</translation>
    </message>
    <message>
        <location filename="../src/ui/first-run.cpp" line="+86"/>
        <source>Choose integration destination dir</source>
        <translation>Escolher uma pasta para armazenar AppImages geridas</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>(default)</source>
        <translation>(padrão)</translation>
    </message>
</context>
<context>
    <name>IntegrationDialog</name>
    <message>
        <location filename="../src/ui/integration_dialog.ui" line="+23"/>
        <source>Desktop Integration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Noto Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;%1 has not been integrated into your system.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt; &lt;br /&gt;Integrating it will move the AppImage into a predefined location, and include it in your application launcher.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To remove or update the AppImage, please use the context menu of the application icon in your task bar or launcher. &lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The directory where the integrated AppImages are stored in is currently set to: %2&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Integrate and run</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Run once</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="../src/ui/main.cpp" line="+385"/>
        <source>Warning</source>
        <translation>Aviso</translation>
    </message>
    <message>
        <source>AppImage has already been integrated, but it is not in the current integration destination directory.

Do you want to move it into the new destination?
Choosing No will run the AppImage once, and leave the AppImage in its current directory.</source>
        <translation type="vanished">AppImage has already been integrated, but it is not in the current integration destination directory.

Do you want to move it into the new destination?
Choosing No will run the AppImage once, and leave the AppImage in its current directory.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AppImage %1 has already been integrated, but it is not in the current integration destination directory.

Do you want to move it into the new destination?

Choosing No will run the AppImage once, and leave the AppImage in its current directory.

</source>
        <translation>O AppImage %1 já foi integrado, mas não se encontra na pasta de armazenamento para AppImages geridos.

Quer movê-la para lá agora?

Clique Não para evitar AppImageLauncher e iniciar o AppImage diretamente da sua localização atual.

</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="+1232"/>
        <location line="+8"/>
        <source>Error</source>
        <translation>Erro</translation>
    </message>
    <message>
        <location filename="../src/ui/main.cpp" line="+23"/>
        <source>Failed to unregister AppImage before re-integrating it</source>
        <translation>Falha ao eliminar a integração do sistema para o AppImage antes de o reintegrar</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="-485"/>
        <source>Could not parse desktop file translations:
Could not open file for reading:

%1</source>
        <translation>Incapaz de analisar as traduções no ficheiro de ambiente de trabalho.
Não foi possível abrir o ficheiro:

%1</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Could not parse desktop file translations:
Invalid syntax:

%1</source>
        <translation>Incapaz de analisar as traduções em ficheiro do ambiente de trabalho.
Sintaxe inválida:

%1</translation>
    </message>
    <message>
        <location line="+409"/>
        <source>File %1 is owned by another user: %2</source>
        <translation>O ficheiro %1 pertence a outro utilizador: %2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Permissions problem</source>
        <translation>Erro: Não há permissões necessárias do sistema de ficheiros</translation>
    </message>
    <message>
        <source>File %1 is owned by another user: %2

Relaunch with their permissions?</source>
        <translation type="vanished">File %1 is owned by another user: %2

Relaunch with their permissions?</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Failed to run permissions helper, exited with return code %1</source>
        <translation>Falha em executar o ajudante de permissões, saído com o código de retorno %1</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Could not find suitable permissions helper, aborting</source>
        <translation>Não foi encontrado um ajudante de permissões adequado, a cancelar</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location line="-985"/>
        <location line="+680"/>
        <location filename="../src/ui/remove_main.cpp" line="+106"/>
        <location line="+12"/>
        <location line="+12"/>
        <location filename="../src/ui/update_main.cpp" line="+119"/>
        <location line="+42"/>
        <source>Error</source>
        <translation>Falha</translation>
    </message>
    <message>
        <location filename="../src/ui/main.cpp" line="-362"/>
        <source>AppImageLauncher does not support type %1 AppImages at the moment.</source>
        <translation>AppImageLauncher não apoia AppImages do tipo %1 actualmente.</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not make AppImage executable: %1</source>
        <translation>Não foi possível definir permissão executável para AppImage: %1</translation>
    </message>
    <message>
        <source>Failed to open AppImage for reading: %1</source>
        <translation type="vanished">Failed to open AppImage for reading: %1</translation>
    </message>
    <message>
        <source>Failed to create temporary directory</source>
        <translation type="vanished">Failed to create temporary directory</translation>
    </message>
    <message>
        <source>Failed to create temporary copy of type 1 AppImage</source>
        <translation type="vanished">Failed to create temporary copy of type 1 AppImage</translation>
    </message>
    <message>
        <source>Failed to open temporary AppImage copy for writing</source>
        <translation type="vanished">Failed to open temporary AppImage copy for writing</translation>
    </message>
    <message>
        <source>Failed to remove magic bytes from temporary AppImage copy</source>
        <translation type="vanished">Failed to remove magic bytes from temporary AppImage copy</translation>
    </message>
    <message>
        <source>execv() failed: %1</source>
        <comment>error message</comment>
        <translation type="vanished">execv() failed: %1</translation>
    </message>
    <message>
        <source>runtime not found: no such file or directory: %1</source>
        <translation type="vanished">runtime not found: no such file or directory: %1</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>execv() failed: %1</source>
        <translation>execv() falhou: %1</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Usage: %1 [options] &lt;path&gt;</source>
        <translation>Utilização: %1 [opções] &lt;caminho&gt;</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Desktop integration helper for AppImages, for use by Linux distributions.</source>
        <translation>Ajudante de integração de ambiente de trabalho para AppImages, para utilização por distribuições Linux.</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Options:</source>
        <translation>Opções:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display this help and exit</source>
        <translation>Mostrar esta ajuda e sair</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display version and exit</source>
        <translation>Mostrar versão e sair</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Arguments:</source>
        <translation>Argumentos:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Path to AppImage (mandatory)</source>
        <translation>Caminho para AppImage (necessário)</translation>
    </message>
    <message>
        <location line="+265"/>
        <source>Unexpected result from the integration dialog.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-287"/>
        <source>Failed to clean up old desktop files</source>
        <translation>Falha na limpeza de ficheiros de entrada no ambiente de trabalho antigos</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: error while trying to start appimagelauncherfs.service</source>
        <translation type="vanished">Failed to register AppImage in AppImageLauncherFS: error while trying to start appimagelauncherfs.service</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: failed to register AppImage path %1</source>
        <translation type="vanished">Failed to register AppImage in AppImageLauncherFS: failed to register AppImage path %1</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: could not open map file</source>
        <translation type="vanished">Failed to register AppImage in AppImageLauncherFS: could not open map file</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: could not find virtual file for AppImage</source>
        <translation type="vanished">Failed to register AppImage in AppImageLauncherFS: could not find virtual file for AppImage</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: unknown failure</source>
        <translation type="vanished">Failed to register AppImage in AppImageLauncherFS: unknown failure</translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../src/ui/remove_main.cpp" line="+1"/>
        <source>Failed to clean up AppImage trash bin: %1</source>
        <translation>Falha na limpeza do caixote do lixo AppImage: %1</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Unknown AppImageLauncher option: %1</source>
        <translation>Opção desconhecida do AppImageLauncher: %1</translation>
    </message>
    <message>
        <location line="+12"/>
        <location filename="../src/ui/remove_main.cpp" line="-74"/>
        <location filename="../src/ui/update_main.cpp" line="-99"/>
        <source>Error: no such file or directory: %1</source>
        <translation>Erro: nenhum ficheiro ou pasta: %1</translation>
    </message>
    <message>
        <location line="+13"/>
        <location filename="../src/ui/update_main.cpp" line="+7"/>
        <source>Not an AppImage: %1</source>
        <translation>Não é um AppImage: %1</translation>
    </message>
    <message>
        <location line="+162"/>
        <source>The directory the integrated AppImages are stored in is currently set to:
%1</source>
        <translation>Atualmente, os AppImages integrados neste sistema são armazenados na pasta:
%1</translation>
    </message>
    <message>
        <source>The directory the integrated AppImages are stored in is currently set to: %1</source>
        <translation type="vanished">The directory the integrated AppImages are stored in is currently set to: %1</translation>
    </message>
    <message>
        <source>Removes AppImages after desktop integration, for use by Linux distributions</source>
        <translation type="vanished">Removes AppImages after desktop integration, for use by Linux distributions</translation>
    </message>
    <message>
        <source>AppImageLauncher remove</source>
        <comment>remove helper app name</comment>
        <translation type="vanished">AppImageLauncher remove</translation>
    </message>
    <message>
        <source>Helper to delete integrated AppImages easily, e.g., from the application launcher&apos;s context menuz</source>
        <translation type="vanished">Helper to delete integrated AppImages easily, e.g., from the application launcher&apos;s context menuz</translation>
    </message>
    <message>
        <location filename="../src/ui/remove_main.cpp" line="-28"/>
        <source>Helper to delete integrated AppImages easily, e.g., from the application launcher&apos;s context menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Path to AppImage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>&lt;path&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>AppImage delete helper error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AppImage remove helper error</source>
        <translation type="vanished">AppImage remove helper error</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Not an AppImage:

%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refusing to work on non-integrated AppImage:

%1</source>
        <translation type="vanished">Refusing to work on non-integrated AppImage:

%1</translation>
    </message>
    <message>
        <source>Please confirm</source>
        <translation type="vanished">Please confirm</translation>
    </message>
    <message>
        <source>Are you sure you want to remove this AppImage?</source>
        <translation type="vanished">Are you sure you want to remove this AppImage?</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Failed to unregister AppImage: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to move AppImage into trash bin directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to remove AppImage: %1</source>
        <translation type="vanished">Failed to remove AppImage: %1</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="-27"/>
        <source>AppImage with same filename has already been integrated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do you wish to overwrite the existing AppImage?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Choosing No will run the AppImage once, and leave the system in its current state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-652"/>
        <location line="+656"/>
        <source>Warning</source>
        <translation type="unfinished">Aviso</translation>
    </message>
    <message>
        <source>Failed to move AppImage to target location</source>
        <translation type="vanished">Failed to move AppImage to target location</translation>
    </message>
    <message>
        <location line="-296"/>
        <source>Failed to register AppImage in system via libappimage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to find integrated desktop file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Couldn&apos;t find integrated AppImage&apos;s desktop file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Failed to load desktop file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>AppImage has invalid desktop file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+271"/>
        <source>Failed to move AppImage to target location.
Try to copy AppImage instead?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+181"/>
        <source>Failed to call stat() on path:

%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to copy AppImage to target location</source>
        <translation type="vanished">Failed to copy AppImage to target location</translation>
    </message>
    <message>
        <location filename="../src/ui/update_main.cpp" line="-40"/>
        <source>Updates AppImages after desktop integration, for use by Linux distributions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>AppImageLauncher update</source>
        <comment>update helper app name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The AppImage hasn&apos;t been integrated before. This tool will, however, integrate the updated AppImage.</source>
        <translation type="vanished">The AppImage hasn&apos;t been integrated before. This tool will, however, integrate the updated AppImage.</translation>
    </message>
    <message>
        <source>Do you wish to continue?</source>
        <translation type="vanished">Do you wish to continue?</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>No updates found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not find updates for AppImage %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to check for updates. Please check the command line output for details.</source>
        <translation type="vanished">Failed to check for updates. Please check the command line output for details.</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No update information found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set update information to allow for easy updating.</source>
        <translation type="vanished">Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set update information to allow for easy updating.</translation>
    </message>
    <message>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set upupdate information to allow for easy updating.</source>
        <translation type="vanished">Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set upupdate information to allow for easy updating.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to embed update information to allow for easy updating.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to check for updates:

%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>An update has been found for the AppImage %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do you want to perform the update?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Remove old AppImage after successful update</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Failed to update AppImage:

%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>File reported as updated does not exist: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to register updated AppImage in system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Failed to unregister old AppImage in system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to remove old AppImage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/daemon/main.cpp" line="+101"/>
        <source>Tracks AppImages in applications directories (user&apos;s, system and other ones). Automatically integrates AppImages moved into those directories and unintegrates ones removed from them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search for AppImages in /Applications directories in suitable mounted filesystems</source>
        <translation type="vanished">Search for AppImages in /Applications directories in suitable mounted filesystems</translation>
    </message>
    <message>
        <source>Search for AppImages in /Applications directories suitable mounted filesystems</source>
        <translation type="vanished">Search for AppImages in /Applications directories suitable mounted filesystems</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Lists directories watched by this daemon and exit</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RemoveDialog</name>
    <message>
        <source>Please confirm</source>
        <translation type="vanished">Please confirm</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Are you sure you want to remove this AppImage?&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Are you sure you want to remove this AppImage?&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/remove.ui" line="+17"/>
        <source>Delete AppImage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Are you sure you want to delete this AppImage?&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Uncheck to only remove the desktop integration, but leave the file on the system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Uncheck to only remove the desktop integration, but leave the file on the system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remove AppImage file from system</source>
        <translation type="vanished">Remove AppImage file from system</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../src/ui/settings_dialog.ui" line="+14"/>
        <source>AppImageLauncher Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AppImageLauncher</source>
        <translation type="vanished">AppImageLauncher</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Launcher Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Ask whether to move AppImage files into the applications directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>appimagelauncherd</source>
        <translation type="vanished">appimagelauncherd</translation>
    </message>
    <message>
        <location line="+119"/>
        <source>General settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, AppImageLauncher automatically starts a daemon called appimagelauncherd.&lt;/p&gt;&lt;p&gt;This daemon automatically integrates AppImages you copy into the &amp;quot;Applications directory&amp;quot; and the additional directories you configured. When the files are deleted, the daemon will clean up the integration data.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto start auto-integration daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Additional directories to watch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Add new directory to list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Remove selected directory from list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-</source>
        <translation type="vanished">-</translation>
    </message>
    <message>
        <source>Applications directory</source>
        <translation type="vanished">Applications directory</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, the daemon automatically integrates AppImages you copy into the &amp;quot;Applications directory&amp;quot;. When the files are deleted, the daemon will clean up the integration data.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, the daemon automatically integrates AppImages you copy into the &amp;quot;Applications directory&amp;quot;. When the files are deleted, the daemon will clean up the integration data.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location line="-144"/>
        <source>Applications directory path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Location where to store your AppImage files to ease their management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location where to store your AppImage files to ease their management using the file manager.</source>
        <translation type="vanished">Location where to store your AppImage files to ease their management using the file manager.</translation>
    </message>
    <message>
        <source>/path</source>
        <translation type="vanished">/path</translation>
    </message>
    <message>
        <source>Enable auto-integration daemon</source>
        <translation type="vanished">Enable auto-integration daemon</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Available Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/settings_dialog.cpp" line="+40"/>
        <source>updater available for AppImages supporting AppImageUpdate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>updater unavailable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&lt;strong&gt;Note: this is an AppImageLauncher Lite build, only supports a limited set of features&lt;/strong&gt;&lt;br /&gt;Please install the full version via the provided native packages to enjoy the full AppImageLauncher experience</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+137"/>
        <source>Select Applications directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Select additional directory to watch</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
