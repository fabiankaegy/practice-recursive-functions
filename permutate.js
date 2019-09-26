export const permutate = inputString => {
	if (inputString.length === 1) return [inputString];
	let allPermutations = [];
	inputString.split("").forEach((currentLetter, index) => {
		// get the letters before and after the current index and join them together
		const remainingLetters =
			inputString.slice(0, index) + inputString.slice(index + 1);

		// get the permutations of the remaining letters
		const permutationsOfRemainingLetters = permutate(remainingLetters);

		permutationsOfRemainingLetters.forEach(subPermutation => {
			// join the sub permutation with the cureent letter and add to all permutations
			allPermutations.push(currentLetter + subPermutation);
		});
	});
	return allPermutations;
};
