type Student = {
	name: string;
	grade: number;
};

// Avoid mutating the original object for parameters
function updateStudent(student: Student, newGrade: number) {
	// student is copied by reference => 0x234234234

	const newCopyStudent = { ...student }; // This has different addresss => 0x100
	newCopyStudent.grade = newGrade;

	return newCopyStudent;
}

// In memory => 0x234234234
const myStudent: Student = {
	name: "Alice",
	grade: 10,
};

const updatedStudent = updateStudent(myStudent, 11);
console.log(myStudent);

console.log(updatedStudent === myStudent ? "Same" : "Different");

export const foo = "bar";
