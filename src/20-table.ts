type User = {
	id: number;
	firstname: string;
	lastname: string;
	age: number;
};

const users: User[] = [
	{
		id: 1,
		firstname: "John",
		lastname: "Doe",
		age: 11,
	},
	{
		id: 2,
		firstname: "Jane",
		lastname: "Doe",
		age: 24,
	},
	{
		id: 3,
		firstname: "John",
		lastname: "Smith",
		age: 18,
	},
	{
		id: 4,
		firstname: "Jane",
		lastname: "Smith",
		age: 8,
	},
];

console.table(users);

export const foo = "bar";
