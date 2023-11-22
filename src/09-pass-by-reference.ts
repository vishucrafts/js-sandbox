type Student = {
	name: string;
	grade: number;
};

function updateStudent(student: Student, newGrade: number) {
	// student is copied by reference => 0x234234234
	student.grade = newGrade;

	return student;
}

// In memory => 0x234234234
const myStudent: Student = {
	name: "Alice",
	grade: 10,
};

const updatedStudent = updateStudent(myStudent, 11);
console.log(myStudent);

console.log(updatedStudent === myStudent ? "Same" : "Different");
