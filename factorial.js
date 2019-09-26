export const factorial = number => {
	if (typeof number != "number") {
		throw new TypeError("Input must be a number");
	}
	if (number <= 0) {
		throw new TypeError("The input needs to be a positive integer");
	}

	// setup variable that will get updated beacuse of the closure nature in js
	let total = number;
	const calculateFactorial = number => {
		total *= number;

		// exit early and return the final value when the number arrived at 1
		if (number === 1) {
			return total;
		}

		// call yourself recuresivly with the number - 1
		return calculateFactorial(number - 1);
	};

	// initiate the recursion
	return calculateFactorial(number - 1);
};
