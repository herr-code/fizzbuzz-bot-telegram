const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("1) Tests para FizzbuzzService applyValidationInExplorer()", () => {
    test("Debe imprimir mensaje de error si recibe un valor que no sea número (explorer.score)", () => {
        const expected = "Error: The argument must be a number";
        const result = FizzbuzzService.applyValidationInExplorer({name: "Explorer", score: undefined});
        expect(expected).toBe(result);
    });

    test("Debe imprimir el mismo valor en explorer.trick y explorer.score si no cumple con las reglas de abajo", () => {
        const explorer1 = {name: "Explorer1", score: 0};
        const expected = 0;
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZ si recibe 3 (explorer.score)", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZ si recibe un multiplo de 3 (explorer.score)", () => {
        const explorer3 = {name: "Explorer3", score: 6};
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir BUZZ si recibe 5 (explorer.score)", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir BUZZ si recibe un multiplo de 5 (explorer.score)", () => {
        const explorer5 = {name: "Explorer5", score: 10};
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZBUZZ si recibe un multiplo de 3 y 5 (explorer.score)", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const expected = "FIZZBUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(expected).toBe(result.trick);
    });
});

describe("2) Tests para FizzbuzzService applyValidationInNumber()", () => {
    test("Debe imprimir mensaje de error si recibe un valor que no sea número", () => {
        const expected = "Error: The argument must be a number";
        const result = FizzbuzzService.applyValidationInNumber(undefined);
        expect(expected).toBe(result);
    });

    test("Debe imprimir el mismo valor si no cumple con las reglas de abajo", () => {
        const expected = 0;
        const result = FizzbuzzService.applyValidationInNumber(0);
        expect(expected).toBe(result);
    });

    test("Debe imprimir FIZZ si recibe 3", () => {
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInNumber(3);
        expect(expected).toBe(result);
    });

    test("Debe imprimir FIZZ si recibe un multiplo de 3", () => {
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInNumber(6);
        expect(expected).toBe(result);
    });

    test("Debe imprimir BUZZ si recibe 5", () => {
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInNumber(5);
        expect(expected).toBe(result);
    });

    test("Debe imprimir BUZZ si recibe un multiplo de 5", () => {
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInNumber(10);
        expect(expected).toBe(result);
    });

    test("Debe imprimir FIZZBUZZ si recibe un multiplo de 3 y 5 (explorer.score)", () => {
        const expected = "FIZZBUZZ";
        const result = FizzbuzzService.applyValidationInNumber(15);
        expect(expected).toBe(result);
    });
});