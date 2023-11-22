import chalk from "chalk";

// variable declaration
let myGreeting = "Hello, world"; // In memory => "Hello, world"

// 1. Primitive values are number, string, boolean
// 2. Primitive values are copied by value
export function printColourfulGreeting(greeting: string) {
	// greeting is copied by value => "Hello, world"
	console.log(chalk.green(greeting));
}

printColourfulGreeting(myGreeting);
