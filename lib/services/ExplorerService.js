class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter(explorer => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernamesInMission = explorersInMission.map(explorer => explorer.githubUsername);
        return explorersUsernamesInMission;
    }
}

module.exports = ExplorerService;