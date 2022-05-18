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
}

module.exports = ExplorerController;