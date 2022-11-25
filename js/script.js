// Testing

// All students names
// const studentName = students.map(student => student.name);
// console.log("All students names:", studentName);

// All students (source of) images 
const studentImage = students.map(student => student.image);
console.log("All students images:", studentImage);

// Finding a specific student

// Finding a specific student whose id is '12'
const randomStudent = students.find(obj => obj.id === 12);

// Printing specific student on the console
console.log(randomStudent);

// Printing specific student image source on the console
console.log(randomStudent.image);
const image = document.querySelector('#studentImage');
image.src = `${randomStudent.image}`;

// Fisher-Yates Shuffle
const shuffleStudentNames = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleStudentNames(students);
console.log("Shuffled students:", students);
console.log(students.slice(0, 10));
console.log(students.slice(0, 20));

const studentNames = students.map(student => student.name);
console.log("Random ten students names:", studentNames.slice(0, 10));
console.log("Random twenty students names:", studentNames.slice(0, 20));


