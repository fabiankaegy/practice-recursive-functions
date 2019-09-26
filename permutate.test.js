import { permutate } from "./permutate";
import { factorial } from "./factorial";

describe("index", () => {
	beforeEach(() => {});

	test("factorial", () => {
		const string = "try";
		expect(permutate(string).length).toBe(factorial(string.length));
	});

	test("factorial 2", () => {
		const string = "testin";
		expect(permutate(string).length).toBe(factorial(string.length));
	});
});
