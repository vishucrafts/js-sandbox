let counter = 0;

const intervalID = setInterval(() => {
	counter += 1;
	console.log("Counter: ", counter);

	if (counter === 10) {
		clearInterval(intervalID);
	}
}, 2000);

export const foo = "bar";
