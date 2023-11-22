// Sum of elements in array

function sumIterative(arr: number[]): number {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]; // sum += arr[i];
	}
	return sum;
}

console.log(sumIterative([1, 2, 3, 4, 5])); // 15
