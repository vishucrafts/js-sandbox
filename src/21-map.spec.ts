import { describe, expect, test } from "vitest";

describe("Array map operations", () => {
	test("Convert array of numbers to array of strings", () => {
		const numbers = [1, 2, 3, 4, 5];
		const expected = ["1", "2", "3", "4", "5"];

		const actual = numbers.map((n) => n.toString());

		expect(actual).toEqual(expected);
	});

	test("Add constant 5 to an array of numbers", () => {
		const numbers = [1, 2, 3, 4, 5];
		const expected = [6, 7, 8, 9, 10];

		const actual = numbers.map((n) => n + 5);

		expect(actual).toEqual(expected);
	});

	test("Extract a specific property from an array of objects", () => {
		type Person = { name: string; age: number };

		const persons: Person[] = [
			{ name: "Alice", age: 21 },
			{ name: "Bob", age: 25 },
			{ name: "Charlie", age: 30 },
		];
		const expected = ["Alice", "Bob", "Charlie"];

		const actual1 = persons.map((p) => p.name);
		const actual2 = persons.map((p) => {
			// Do something some code
			return p.name;
		});
		// With destructuring
		const actual3 = persons.map(({ name }) => name);

		expect(actual1).toEqual(expected);
		expect(actual2).toEqual(expected);
		expect(actual3).toEqual(expected);
	});
});
