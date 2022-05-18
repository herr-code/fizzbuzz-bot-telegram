const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para Explorer Service", () => {
    test("Requerimiento 1: Filtrar explorers con mission node", () => {
        const explorers = [{mission: "node"}, {mission: "java"}, {mission: "java"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toEqual([{"mission": "node"}]);
    });

    test("Requerimiento 2: Calcular todos los explorer en la mision node", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);
    });

    test("Requerimiento 3: Mostrar usernames de explorers en la mision node", () => {
        const explorers = [{mission: "node", githubUsername: "Explorer1"}, {mission: "java", githubUsername: "Explorer2"}, {mission: "java", githubUsername: "Explorer3"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode).toEqual(["Explorer1"]);
    });

    test("Requerimiento extra: Mostrar usernames de explorers en la mision java", () => {
        const explorers = [{mission: "node", githubUsername: "Explorer1"}, {mission: "java", githubUsername: "Explorer2"}, {mission: "java", githubUsername: "Explorer3"}];
        const explorersInJava = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        expect(explorersInJava).toEqual(["Explorer2", "Explorer3"]);
    });
});