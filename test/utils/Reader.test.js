const Reader = require("./../../lib/utils/Reader");

describe("Tests para Reader utils", () => {
    test("No debe ser null ni undefined ni vacia la respuesta de readJsonFile", () => {
        const result = Reader.readJsonFile("./test/utils/data-example/data-2.json");
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result.length).toBeGreaterThan(0);
    });

    test("Debe imprimir Leanne Graham para el primer name de users", () => {
        const expected = "Leanne Graham";
        const result = Reader.readJsonFile("./test/utils/data-example/data-2.json");
        expect(expected).toBe(result[0].name);
    });
});