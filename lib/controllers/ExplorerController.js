const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorersList, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorersList, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorersList, mission);
    }

    static applyFizzbuzz(score) {
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static verifyBotMsg(msg, bot) {
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        } else {
             if (msg.text === "java" || msg.text === "node") {
                bot.sendMessage(chatId, this.getExplorersUsernamesByMission(msg.text).join(", "));
            } else {
                bot.sendMessage(chatId, "Número ó string no válido");
            }
        }
    }

}

module.exports = ExplorerController;