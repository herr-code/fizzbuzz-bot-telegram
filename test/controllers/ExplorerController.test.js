const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para Explorer Controller", () => {
    test("Requerimiento 1: Filtrar explorers con mission node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });

    test("Requerimiento 2: Mostrar usernames de explorers en la mision node", () => {
        const usernamesListInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesListInNode.length).toBe(10);
        expect(usernamesListInNode[0]).toBe("ajolonauta1");
    });

    test("Requerimiento 2_1: Mostrar usernames de explorers en la mision java", () => {
        const usernamesListInJava = ExplorerController.getExplorersUsernamesByMission("java");
        expect(usernamesListInJava.length).toBe(5);
        expect(usernamesListInJava[0]).toBe("ajolonauta6");
    });

    test("Requerimiento 3: Calcular todos los explorer en la mision node", () => {
        const explorersListInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersListInNode).toBe(10);
    });

    test("Requerimiento 4: Aplicar FizzbuzzService dado un numero", () => {
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(15);
        expect(fizzbuzzTrick).toBe("FIZZBUZZ");
    });

    test("Requerimiento 4: Aplicar FizzbuzzService dado un numero", () => {
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(0);
        expect(typeof(fizzbuzzTrick)).toBe("number");
    });
});