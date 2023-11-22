const PI = 3.14;

// radius is in global scope
const radius = 5;

function calculateAreaOfCircle() {
	// radius isn't in local scope so we reached out to global scope

	return PI * radius * radius;
}

// Better
// Explicit parameter
// function calculateAreaOfCircle(radius: number) {
// 	return PI * radius * radius;
// }
