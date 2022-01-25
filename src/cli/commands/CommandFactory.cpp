// local headers
#include "CommandFactory.h"
#include "IntegrateCommand.h"
#include "UnintegrateCommand.h"
#include "WouldIntegrateCommand.h"
#include "exceptions.h"


namespace appimagelauncher {
    namespace cli {
        namespace commands {
            std::shared_ptr<Command> CommandFactory::getCommandByName(const QString& commandName) {
                if (commandName == "integrate") {
                    return std::shared_ptr<Command>(new IntegrateCommand);
                } else if (commandName == "unintegrate") {
                    return std::make_shared<UnintegrateCommand>();
                } else if (commandName == "would-integrate") {
                    return std::make_shared<WouldIntegrateCommand>();
                }

                throw CommandNotFoundError(commandName);
            }
        }
    }
}
