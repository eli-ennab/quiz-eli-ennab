const gameOptions = document.querySelector('#gameOptions');
const nbrOfGamesInfoBox = document.querySelector('#nbrOfGamesInfoBox');
const infoBox = document.querySelector('#infoBox');

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

const shuffleRandomStudent = (students) => {
	for (let i = students.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = students[i];
		students[i] = students[j];
		students[j] = temp;
	}
}

let trueStudent;
let falseStudent;

// To keep count of the correct and false guesses
let correctGuesses = 0;
let falseGuesses = 0;

// To keep count of the guesses
let guesses;
let allStudents = students.length;

const startNewGame = () => {
	// Shuffle all the students
	shuffleRandomStudent(students);

	// First student in shuffle will be the true student
	newTrueStudent();

	// Next three students will be the false students
	newFalseStudents();
}

// A function that gives the new true student (name and image)
function newTrueStudent() {
	const randomStudentImage = students.find(student => student);   	// Random students name's image
	const image = document.querySelector('#studentImage');          	// Random student into DOM
	image.src = `${randomStudentImage.image}`;

	const randomCorrectStudentName = students.find(student => student);	// Random true students name

	trueStudent = document.querySelector('#option1');				// And into DOM
	trueStudent.textContent = `${randomCorrectStudentName.name}`;

	// Change value to true for true student
	trueStudent.value = true;
};

// A function that gives three new false student (names)
function newFalseStudents() {

	// False student 1
	shuffleRandomStudent(students);
	let randomFalseStudentName = students.find(student => student);
	falseStudent = document.querySelector('#option2');
	falseStudent.textContent = `${randomFalseStudentName.name}`;

	// False student 2
	shuffleRandomStudent(students);
	randomFalseStudentName = students.find(student => student);
	falseStudent = document.querySelector('#option3');
	falseStudent.textContent = `${randomFalseStudentName.name}`;
	// False student 3
	shuffleRandomStudent(students);
	randomFalseStudentName = students.find(student => student);
	falseStudent = document.querySelector('#option4');
	falseStudent.textContent = `${randomFalseStudentName.name}`;

	// Change value to false for all false students
	falseStudent.value = false;
};

gameOptions.addEventListener('click', e => {
	e.preventDefault();
	// console.log('You clicked the options.', e.target);

	if (e.target === trueStudent) {
		correctGuesses++;
		console.log('True');
		infoBox.innerHTML = `<h4>TRUE<h4>`;
	} else {
		falseGuesses++;
		console.log('False');
		infoBox.innerHTML = `<h4>FALSE<h4>`;
	}; 

	newTrueStudent();
	newFalseStudents();
});

startNewGame();

nbrOfGames.addEventListener('click', e => {
	e.preventDefault();

	if (e.target === btn10) {
		guesses = 10;
		nbrOfGamesInfoBox.innerHTML = (`<h3>You have chosen ${guesses} students.</h3>`);
	} else if (e.target === btn20) {
		guesses = 20;
		nbrOfGamesInfoBox.innerHTML = (`<h3>You have chosen ${guesses} students.</h3>`);
	} else {
		guesses = allStudents;
		nbrOfGamesInfoBox.innerHTML = (`<h3>You have chosen all ${allStudents} students.</h3>`);
	};
});

btnResetGame.addEventListener('click', e => {
		e.preventDefault();

		nbrOfGamesInfoBox.innerHTML = (`<h3>You gave up.</h3>`);
		guesses = 0;
		newTrueStudent();
		newFalseStudents();
		infoBox.innerHTML = ``;
});

// falseStudent.value = randomFalseStudentName.id;		// Finding id
// falseStudent.name = randomFalseStudentName.name;		// Finding name

// // Getting 10, 20 or all students
// console.log(students.slice(0, 10));						// 10 random students
// console.log(students.slice(0, 20));						// 20 random students
// console.log(students);									// ALL students

// navigationButtons.addEventListener('click', e => {
// 	e.preventDefault();
// 	if (e.target === btnSubmitAnswer) {
// 		console.log('Submit answer');
// 	} else {
// 		console.log('New game');
// 	};
// });

// nbrOfGames.addEventListener('click', e => {
// 	e.preventDefault();

// 	if (e.target === btn10) {
// 		console.log(students.slice(0, 10));						// 10 random students
// 	} else if (e.target === btn20) {
// 		console.log(students.slice(0, 20));						// 20 random students	
// 	} else {
// 		console.log(students);									// 20 random students	
// 	};
// });