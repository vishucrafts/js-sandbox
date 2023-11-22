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
		age: 25,
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
		age: 30,
	},
	{
		id: 4,
		firstname: "Jane",
		lastname: "Smith",
		age: 28,
	},
];

const usersWithFullname = users.map((user) => {
	return {
		...user,
		fullname: `${user.firstname} ${user.lastname}`,
	};
});

console.log({ usersWithFullname });

export const foo = "bar";
