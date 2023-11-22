import chalk from "chalk";

// lifetime => scope

// 1. Can't use a variable before it's declared
// Cannot find name 'greeting'. Did you mean 'myGreeting'?
// @ts-expect-error
console.log(greeting); // error

// variable declaration
let myGreeting = "Hello, world"; // In memory => "Hello, world"
