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

const shuffleRandomStudent = (students) => {
	for (let i = students.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = students[i];
		students[i] = students[j];
		students[j] = temp;
	}
}

shuffleRandomStudent(students);

let trueStudent;
let falseStudent;

function newTrueStudent() {
	const randomStudentImage = students.find(student => student);   	// Random students name's image
	console.log(randomStudentImage.image);
	const image = document.querySelector('#studentImage');          	// Random student into DOM
	image.src = `${randomStudentImage.image}`;

	const randomCorrectStudentName = students.find(student => student);	// Random true students name
	console.log(randomCorrectStudentName.name);

	trueStudent = document.querySelector('#option1');				// And into DOM
	trueStudent.textContent = `${randomCorrectStudentName.name}`;
	trueStudent.value = true;
};

newTrueStudent();

// let correctGuesses = 0;
// let falseGuesses = 0;

navigationButtons.addEventListener('click', e => {
		e.preventDefault();

		if (e.target === btnSubmitAnswer) {
			shuffleRandomStudent(students);
			newTrueStudent();
			// correctGuesses++;
			// console.log(`${correctGuesses} correct guesses.`);
		} else {
			alert('You gave up!');
			// falseGuesses++;
			// console.log(`${falseGuesses} false guesses.`);
		};
	});

// False student 1
shuffleRandomStudent(students);
let randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
falseStudent = document.querySelector('#option2');
falseStudent.textContent = `${randomFalseStudentName.name}`;
falseStudent.value = false;
// False student 2
shuffleRandomStudent(students);
randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
falseStudent = document.querySelector('#option3');
falseStudent.textContent = `${randomFalseStudentName.name}`;
falseStudent.value = false;
// False student 3
shuffleRandomStudent(students);
randomFalseStudentName = students.find(student => student);
console.log(randomFalseStudentName.name);
falseStudent = document.querySelector('#option4');
falseStudent.textContent = `${randomFalseStudentName.name}`;
falseStudent.value = false;

// falseStudent.value = randomFalseStudentName.id;		// Finding id
// falseStudent.name = randomFalseStudentName.name;		// Finding name

// // Getting 10, 20 or all students
// console.log(students.slice(0, 10));						// 10 random students
// console.log(students.slice(0, 20));						// 20 random students
// console.log(students);									// ALL students

gameOptions.addEventListener('click', e => {
	e.preventDefault();
	// console.log('You clicked the options.', e.target);

	if (e.target === trueStudent) {
		console.log('Correct');
	} else {
		console.log('Wrong');
	}; 
});

// navigationButtons.addEventListener('click', e => {
// 	e.preventDefault();
// 	if (e.target === btnSubmitAnswer) {
// 		console.log('Submit answer');
// 	} else {
// 		console.log('New game');
// 	};
// });

nbrOfGames.addEventListener('click', e => {
	e.preventDefault();

	if (e.target === btn10) {
		console.log(students.slice(0, 10));						// 10 random students
	} else if (e.target === btn20) {
		console.log(students.slice(0, 20));						// 20 random students	
	} else {
		console.log(students);						// 20 random students	
	};
});