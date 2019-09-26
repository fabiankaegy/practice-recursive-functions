export const reverseString = inputString => {
	const reverse = (input, index) => {
		// return the raw input once all letters were moved
		if (index === 0) {
			return input;
		}
		// convert to array with all letters
		input = input.split("");
		// get the letter at the current posotion starting from the back
		const letter = input.splice(index - 1, 1);
		// add that letter to the end of the array
		input.push(letter);
		// run recirsivly while lowering the index by one
		return reverse(input.join(""), index - 1);
	};
	return reverse(inputString, inputString.length);
};
