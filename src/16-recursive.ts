function sumRecursive(arr: number[]): number {
	// base case => when to stop
	if (arr.length === 0) {
		return 0;
	}

	//  [1, 2, 3, 4, 5, 6] => first: 1, rest: [2, 3, 4, 5, 6]
	// Divide and conquer
	// sum of first element + sum of rest of the elements

	// array destructuring
	const [first, ...rest] = arr;
	// first call: first = 1, rest = [2, 3, 4, 5, 6]
	// second call: first = 2, rest = [3, 4, 5, 6]
	// third call: first = 3, rest = [4, 5, 6]
	// fourth call: first = 4, rest = [5, 6]
	// fifth call: first = 5, rest = [6]
	// sixth call: first = 6, rest = []

	console.log({ first, rest });

	return first + sumRecursive(rest);
}

const sum = sumRecursive([1, 2, 3, 4]);
console.log({ sum });
