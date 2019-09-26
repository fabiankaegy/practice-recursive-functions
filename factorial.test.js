import { factorial } from "./factorial";

describe("index", () => {
	beforeEach(() => {});

	test("factorial", () => {
		expect(factorial(3)).toBe(6);
		expect(factorial(2)).toBe(2);
		expect(factorial(4)).toBe(24);
		expect(factorial(5)).toBe(120);
	});

	test("factorial throws with malformed input", () => {
		expect(() => {
			factorial(-3);
		}).toThrow(TypeError);

		expect(() => {
			factorial("s");
		}).toThrow(TypeError);

		expect(() => {
			factorial(Math.PI);
		}).toThrow();

		expect(() => {
			factorial(Infinity);
		}).toThrow();
	});
});
