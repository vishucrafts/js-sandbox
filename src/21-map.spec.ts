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
		type Person = { name: string; age: number }; // Type

		const persons: Person[] = [
			{ name: "Alice", age: 21 },
			{ name: "Bob", age: 25 },
			{ name: "Charlie", age: 30 },
		];

		// name and age here are not variables. They're just a property on person Object which can be
		// accessed by dot operator(.)
		// persons[0].name;
		// persons[2].age;

		const expected = ["Alice", "Bob", "Charlie"];

		const actual1 = persons.map((p) => p.name);
		const actual2 = persons.map((p) => {
			// Do something some code
			return p.name;
		});
		// With destructuring
		const actual3 = persons.map(({ name }) => name);

		const person = persons[0];

		// person.name // is annoying
		// person.age // is annoying
		// It would be better if we could create name and age variables
		// We do it with object destructuring
		const { name, age } = person;
		// now
		// name => is a variable
		// age => is a variable

		expect(actual1).toEqual(expected);
		expect(actual2).toEqual(expected);
		expect(actual3).toEqual(expected);
	});

	test("Convert array of strings to upper case", () => {
		const fruits = ["apple", "banana", "cherry"];

		const expected = ["APPLE", "BANANA", "CHERRY"];
		const actual = fruits.map((f) => f.toUpperCase());

		expect(actual).toEqual(expected);
	});

	test("Convert a product to contain discounted price", () => {
		type Product = {
			name: string;
			price: number;
			discount: number;
		};

		const products: Product[] = [
			{
				name: "Keychron Keyboard",
				discount: 0.2,
				price: 100,
			},
			{
				name: "MX Master 3S Mouse",
				discount: 0.3,
				price: 110,
			},
		];

		const actual = products.map((product) => {
			return {
				...product, // spread
				discountedPrice: product.price - product.price * product.discount,
			};
		});

		expect(actual).toMatchInlineSnapshot(`
			[
			  {
			    "discount": 0.2,
			    "discountedPrice": 80,
			    "name": "Keychron Keyboard",
			    "price": 100,
			  },
			  {
			    "discount": 0.3,
			    "discountedPrice": 77,
			    "name": "MX Master 3S Mouse",
			    "price": 110,
			  },
			]
		`);
	});

	test("Map over array of tuples", () => {
		type Point = [x: number, y: number]; // tuples => Tuple has fixed length unlike array

		const points: Point[] = [
			[1, 2],
			[5, 5],
			[-1, 4],
		];

		const actual = points.map(([x, y]) => [x + 1, y + 1]);

		expect(actual).toMatchInlineSnapshot(`
			[
			  [
			    2,
			    3,
			  ],
			  [
			    6,
			    6,
			  ],
			  [
			    0,
			    5,
			  ],
			]
		`);
	});

	test("Combining multiple arrays into one", () => {
		const names = ["Alice", "Bob", "Charlie"];
		const ages = [25, 30, 35];

		// const users = names.map((name, index) => {
		// 	const age = ages[index];
		// 	return {
		// 		name: name,
		// 		age: age,
		// 	};
		// });

		// const users = names.map((name, index) => {
		// 	const age = ages[index];
		// 	return {
		// 		name,
		// 		age,
		// 	};
		// });

		// My preferred way
		const users = names.map((name, index) => {
			return {
				name,
				age: ages[index],
			};
		});

		// const users = names.map((name, index) => ({
		// 	name,
		// 	age: ages[index],
		// }));

		expect(users).toMatchInlineSnapshot(`
			[
			  {
			    "age": 25,
			    "name": "Alice",
			  },
			  {
			    "age": 30,
			    "name": "Bob",
			  },
			  {
			    "age": 35,
			    "name": "Charlie",
			  },
			]
		`);
	});

	test("Get string lengths", () => {
		const languages = ["Typescript", "Javascript", "Golang", "Rust", "Java"];

		const lengths = languages.map((l) => l.length);

		expect(lengths).toMatchInlineSnapshot(`
			[
			  10,
			  10,
			  6,
			  4,
			  4,
			]
		`);
	});

	test("Format strings", () => {
		const prices = [99.99, 199.99, 299.99];

		const formattedPrices = prices.map((p) => `$${p.toFixed(1)}`);

		const hello = "Hello";
		const world = "World";
		const welcome = "Welcome";
		// const myMessage = hello + " " + world + " " + welcome
		const myMessage = `${hello} ${world} ${welcome}`; // tagged template strings

		expect(formattedPrices).toMatchInlineSnapshot(`
			[
			  "$100.0",
			  "$200.0",
			  "$300.0",
			]
		`);
	});

	test("should get first row from a matrix", () => {
		const matrix = [
			[1, 2],
			[3, 4],
			[5, 6],
		];

		const actual = matrix.map((row) => row[0]);

		expect(actual).toMatchInlineSnapshot(`
			[
			  1,
			  3,
			  5,
			]
		`);
	});

	test("should map to boolean value", () => {
		const numbers = [1, 2, 3, 4, 5, 6];

		const isEven = numbers.map((n) => n % 2 === 0);
		expect(isEven).toMatchInlineSnapshot(`
			[
			  false,
			  true,
			  false,
			  true,
			  false,
			  true,
			]
		`);
	});

	test("Convert array of dates into readable format", () => {
		const dates = [new Date(2020, 0, 1), new Date(2020, 1, 1)];

		const formattedDates = dates.map(
			(date) => date.toISOString().split("T")[0]
		);

		expect(formattedDates).toMatchInlineSnapshot(`
			[
			  "2019-12-31",
			  "2020-01-31",
			]
		`);
	});

	test("Map over an array of objects to increase a property value", () => {
		const items = [{ count: 1 }, { count: 2 }, { count: 3 }];
		const incrementedItems = items.map((item) => {
			return { ...item, count: item.count + 1 };
		});

		expect(incrementedItems).toMatchInlineSnapshot(`
			[
			  {
			    "count": 2,
			  },
			  {
			    "count": 3,
			  },
			  {
			    "count": 4,
			  },
			]
		`);
	});

	test.skip("Generate 5 random numbers", () => {
		const randomNumbers = Array.from({ length: 5 }).map(() =>
			Math.random().toFixed(2)
		);

		expect(randomNumbers).toMatchInlineSnapshot(`
			[
			  "0.04",
			  "0.77",
			  "0.26",
			  "0.72",
			  "0.30",
			]
		`);
	});

	test("split strings in an array", () => {
		const data = ["1,apple", "2,banana", "3,cherry"];

		const firstElements = data.map((item) => item.split(",")[0]);

		expect(firstElements).toMatchInlineSnapshot(`
			[
			  "1",
			  "2",
			  "3",
			]
		`);
	});

	test("Convert hex color to RGB", () => {
		const hexColors = ["#ff0000", "#00ff00", "#0000ff"];
		const rgbColors = hexColors.map((hex) => {
			// Hexadecimal => Radix 16
			const red = parseInt(hex.substring(1, 3), 16);
			const green = parseInt(hex.substring(3, 5), 16);
			const blue = parseInt(hex.substring(5, 7), 16);

			return `rgb (${red}, ${green}, ${blue})`;
		});

		expect(rgbColors).toMatchInlineSnapshot(`
			[
			  "rgb (255, 0, 0)",
			  "rgb (0, 255, 0)",
			  "rgb (0, 0, 255)",
			]
		`);
	});

	test("Remove a property from an array of objects", () => {
		const employees = [
			{ id: 1, name: "Alice", department: "HR" },
			{ id: 2, name: "Bob", department: "IT" },
		];

		// Gathering
		const employeeSummaries = employees.map(
			({ department, ...employee }) => employee
		);
		expect(employeeSummaries).toMatchInlineSnapshot(`
			[
			  {
			    "id": 1,
			    "name": "Alice",
			  },
			  {
			    "id": 2,
			    "name": "Bob",
			  },
			]
		`);
	});

	test("Mapping over complex data structure", () => {
		type Employee = {
			name: string;
		};

		type Department = {
			name: string;
			employees: Employee[];
		};

		const departments: Department[] = [
			{ name: "HR", employees: [{ name: "Alice" }, { name: "Bob" }] },
			{ name: "IT", employees: [{ name: "Charlie" }, { name: "David" }] },
		];

		const employeeNames = departments.map((d) =>
			d.employees.map((employee) => employee.name)
		);

		expect(employeeNames).toMatchInlineSnapshot(`
			[
			  [
			    "Alice",
			    "Bob",
			  ],
			  [
			    "Charlie",
			    "David",
			  ],
			]
		`);
	});

	test("make database requests for all users ids", () => {
		const userIds = [1, 2, 3];

		const userQueries = userIds.map(
			(userId) => `SELECT * FROM users WHERE id = ${userId}`
		);

		expect(userQueries).toMatchInlineSnapshot(`
			[
			  "SELECT * FROM users WHERE id = 1",
			  "SELECT * FROM users WHERE id = 2",
			  "SELECT * FROM users WHERE id = 3",
			]
		`);
	});
});
