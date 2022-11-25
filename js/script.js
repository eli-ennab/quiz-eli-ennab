const navigationButtons = document.querySelector('navigationButtons');
const optionButtons = document.querySelector('#optionButtons');
const option1Button = document.querySelector('#option1');
const option2Button = document.querySelector('#option2');
const option3Button = document.querySelector('#option3');
const option4Button = document.querySelector('#option4');

optionButtons.addEventListener('click', e => {
	e.preventDefault();
	console.log('You clicked me.', e.target);
});

// Shuffle random students object
const shuffleRandomStudent = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleRandomStudent(students);

// Random students name
const randomStudentName = students.find(student => students);
console.log(randomStudentName.name);
// And into DOM
const name = document.querySelector('#option1');
name.innerHTML = `<p>${randomStudentName.name}</p>`;

// Random students name's image
const randomStudentImage = students.find(student => students);
console.log(randomStudentImage.image);
// And into DOM
const image = document.querySelector('#studentImage');
image.src = `${randomStudentImage.image}`;

// // Testing

// // All students names
// // const studentName = students.map(student => student.name);
// // console.log("All students names:", studentName);

// // All students (source of) images 
// const studentImage = students.map(student => student.image);
// console.log("All students images:", studentImage);

// // Finding a specific student

// // Finding a specific student whose id is '12'
// // const randomStudent = students.find(obj => obj.id === 14);

// // Printing specific student on the console
// // console.log(randomStudent);

// // Printing specific student image source on the console
// // console.log(randomStudent.image);
// // const image = document.querySelector('#studentImage');
// // image.src = `${randomStudent.image}`;

// // Fisher-Yates Shuffle
// const shuffleStudentNames = (array) => {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		const temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}
// }

// shuffleStudentNames(students);
// console.log("Shuffled students:", students);
// console.log(students.slice(0, 10));
// console.log(students.slice(0, 20));

// // option1Button.innerText += `Button with ${students.name}`;

// const studentNames = students.map(student => student.name);
// console.log("Random ten students names:", studentNames.slice(0, 10));
// console.log("Random twenty students names:", studentNames.slice(0, 20));


// // Add students names to buttons
// const option1Student = studentNames.slice(0, 1);
// option1Button.innerText = `${option1Student}`;
// // const option2Student = studentNames.slice(1, 2);
// // option1Button.innerText = `${option2Student}`;
// // const option3Student = studentNames.slice(2, 3);
// // option1Button.innerText = `${option3Student}`;
// // const option4Student = studentNames.slice(3, 4);
// // option1Button.innerText = `${option4Student}`;