import { reverseString } from "./reverseString";

describe("index", () => {
	beforeEach(() => {});

	test("factorial", () => {
		expect(reverseString("hallo")).toBe("ollah");
		expect(reverseString("hi")).toBe("ih");
		expect(reverseString("fabian")).toBe("naibaf");
	});
});
