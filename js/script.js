const gameOptions = document.querySelector('#gameOptions');

// // Get the random 3 false names

// function getRandomStudents(students, num) {
//     const shuffledStudents = [...students].sort(() => 0.5 - Math.random());
  
//     return shuffledStudents.slice(0, num);
//   }
// console.log(getRandomStudents(students, 3));

// const falseStudents = (getRandomStudents(students, 3));
// console.log(falseStudents.name);

// startGame.addEventListener(e)
// Get random true student

const shuffleRandomStudent = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleRandomStudent(students);

const randomStudentImage = students.find(student => student);   	// Random students name's image
console.log(randomStudentImage.image);
const image = document.querySelector('#studentImage');          	// Random student into DOM
image.src = `${randomStudentImage.image}`;

const randomCorrectStudentName = students.find(student => student);	// Random true students name
console.log(randomCorrectStudentName.name);


const trueStudent = document.querySelector('#option1');				// And into DOM
trueStudent.innerHTML = `<p class="studentName1">${randomCorrectStudentName.name}</p>`;

// False student 1
shuffleRandomStudent(students);
let randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
let falseStudent = document.querySelector('#option2');
falseStudent.innerHTML = `<p class="studentName2">${randomFalseStudentName.name}</p>`;
// False student 2
shuffleRandomStudent(students);
randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
falseStudent = document.querySelector('#option3');
falseStudent.innerHTML = `<p class="studentName3">${randomFalseStudentName.name}</p>`;
// False student 3
shuffleRandomStudent(students);
randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
falseStudent = document.querySelector('#option4');
falseStudent.innerHTML = `<p class="studentName4">${randomFalseStudentName.name}</p>`;

gameOptions.addEventListener('click', e => {
	e.preventDefault();
	console.log('You clicked the options.', e.target);
});

navigationButtons.addEventListener('click', e => {
	e.preventDefault();
	console.log('You clicked the navigation buttons.', e.target);
});

nbrOfGames.addEventListener('click', e => {
	e.preventDefault();
	console.log('You clicked the number of games-buttons.', e.target);
});