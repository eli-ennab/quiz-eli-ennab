/*
* 10 students only
*/

// Shuffle the students
const shuffleRandomStudent = (students) => {
	for (let i = students.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = students[i];
		students[i] = students[j];
		students[j] = temp;
	}
}

const randomStudents = students.map(student => student)
shuffleRandomStudent(randomStudents);
const studentNames = randomStudents.map(student=> student.name);
const studentID = randomStudents.map(student=> student.id);

let trueStudent;
let falseStudents;
let allTrueStudents;
let falseStudent;

const optionButtons = document.querySelector('#optionButtons');

// Slice 10 true students
allTrueStudents = randomStudents
	.map(student => student)
	.slice(0, 10);
// allTrueStudents = (allTrueStudents.slice(0, 10));

function newStudents() {
	// A new true student
	trueStudent = allTrueStudents.shift();

	// The true students image
	// const trueStudentImage = trueStudent;
	const image = document.querySelector('#studentImage');
	image.src = `${trueStudent.image}`;

	// Filter to get all false students
	falseStudents = studentNames.filter(name => name !== trueStudent.name);

	// Shuffle all false students
    shuffleRandomStudent(falseStudents);

	// Get three false student names
    const falseStudentName = falseStudents.slice(0, 3);

	// Create a new array with four options (one true and three false)
    const options = [...falseStudentName, trueStudent.name];
    shuffleRandomStudent(options);

	// Get the options out to the DOM, randomized
    const gameButtons = document.querySelectorAll('.game-options');

    for (let i=0; i < gameButtons.length; i++) {
        gameButtons[i].innerHTML = options[i];
    }
};

btn10.addEventListener('click', e => {
	const showGameEl = document.querySelector('#game');
	showGameEl.classList.remove('hide');
	startNewGame10();
});

const startNewGame10 = () => {
	// Get image and name options
	newStudents();

	optionButtons.addEventListener('click', e => {
		e.preventDefault();

		// if (studentNames === studentID) {
		// 	alert('Correct!');
		// } else {
		// 	console.log('TBC...');
		// }

		setTimeout(() => {
			// console.log("Waiting...");
			newStudents();
			return;
		}, 1000);
	})
}

/*
* 20 students only
*/

// Slice 20 true students
allTrueStudents = randomStudents.map(student => student)
allTrueStudents = (allTrueStudents.slice(0, 20));

function newStudents() {
	// A new true student
	trueStudent = allTrueStudents.shift();

	// The true students image
	// const trueStudentImage = trueStudent;
	const image = document.querySelector('#studentImage');
	image.src = `${trueStudent.image}`;

	// Filter to get all false students
	falseStudents = studentNames.filter(name => name !== trueStudent.name);

	// Shuffle all false students
    shuffleRandomStudent(falseStudents);

	// Get three false student names
    const falseStudentName = falseStudents.slice(0, 3);

	// Create a new array with four options (one true and three false)
    const options = [...falseStudentName, trueStudent.name];
    shuffleRandomStudent(options);

	// Get the options out to the DOM, randomized
    const gameButtons = document.querySelectorAll('.game-options');

    for (let i=0; i < gameButtons.length; i++) {
        gameButtons[i].innerHTML = options[i];
    }
};

btn20.addEventListener('click', e => {
	const showGameEl = document.querySelector('#game');
	showGameEl.classList.remove('hide');
	startNewGame20();
});

const startNewGame20 = () => {
	// Get image and name options
	newStudents();

	optionButtons.addEventListener('click', e => {
		e.preventDefault();

		setTimeout(() => {
			console.log("Waiting...");
			newStudents();
		}, 1500);
	})
}

/*
* ALL students
*/

// All true students
allTrueStudents = randomStudents.map(student => student)

function newStudents() {
	// A new true student
	trueStudent = allTrueStudents.shift();

	// The true students image
	// const trueStudentImage = trueStudent;
	const image = document.querySelector('#studentImage');
	image.src = `${trueStudent.image}`;
	console.log(`${trueStudent.name}`);

	// Filter to get all false students
	falseStudents = studentNames.filter(name => name !== trueStudent.name);

	// Shuffle all false students
    shuffleRandomStudent(falseStudents);

	// Get three false student names
    const falseStudentName = falseStudents.slice(0, 3);

	// Create a new array with four options (one true and three false)
    const options = [...falseStudentName, trueStudent.name];
    shuffleRandomStudent(options);

	// Get the options out to the DOM, randomized
    const gameButtons = document.querySelectorAll('.game-options');

    for (let i=0; i < gameButtons.length; i++) {
        gameButtons[i].innerHTML = options[i];
    }
};

btnAll.addEventListener('click', e => {
	const showGameEl = document.querySelector('#game');
	showGameEl.classList.remove('hide');
	startNewGameAllStudents();
});

startNewGameAllStudents = (e) => {
	// Get image and name options
	newStudents();

	optionButtons.addEventListener('click', e => {
		e.preventDefault();

		setTimeout(() => {
			console.log("Waiting...");
			newStudents();
		}, 1500);
	})
};
