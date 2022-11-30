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

const randomStudents = students.map(student => student)					// A new undestructive list
shuffleRandomStudent(randomStudents);									// Shuffle the new list
const studentNames = randomStudents.map(student=> student.name);		// A list of arrays
const gameButtons = document.querySelectorAll('.game-options');			// All the game options
const image = document.querySelector('#studentImage');					// The student's image

const infoBox = document.querySelector('#infoBox');						// True or false
const turnoutBox = document.querySelector('#turnoutBox');				// Results!
const showGameEl = document.querySelector('#game');						// Showing the game when user have chosen game options 10, 20 or all
// const navigationButtonEl = document.querySelector('#navigationButton'); // Reset button
const resetGameEl = document.querySelector('btnResetGame');

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
    for (let i=0; i < gameButtons.length; i++) {
        gameButtons[i].innerHTML = options[i];
    }
};

btn10.addEventListener('click', e => {
	turnoutBox.classList.add('hide');
	showGameEl.classList.remove('hide');
	startNewGame10();
});

const startNewGame10 = () => {
	// Get image and name options
	newStudents();

	// Define amount of guesses
	let guesses = 10;
	// Correct guesses
	let correctGuesses = 0;
	// Wrong guesses
	let wrongGuesses = 0;

	optionButtons.addEventListener('click', e => {
		e.preventDefault();

		// Guesses countdown
		guesses--;

		if (e.target.innerText === trueStudent.name) {
			correctGuesses++;
			console.log(`Guesses left: ${guesses}`);
			infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
		} else {
			wrongGuesses++;
			console.log(`Guesses left: ${guesses}`);
			infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
		}

		setTimeout(() => {
			infoBox.innerHTML = ``;
				if (guesses > 0) {
				newStudents();
			} else {
				// console.log('The end');
				// console.log(`You had ${correctGuesses} correct guesses and ${wrongGuesses} wrong guesses`);
				showGameEl.classList.add('hide');
				turnoutBox.classList.remove('hide');
				if (correctGuesses <= 4) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/10 correct guesses. You can do better!</h3>`;
				} else if (correctGuesses >= 8) {
				turnoutBox.innerHTML = `<h3>${correctGuesses}/10 correct guesses. Great!</h3>`;
				} else {
				turnoutBox.innerHTML = `<h3>IMPRESSIVE! ${correctGuesses}/10 correct guesses.</h3>`;
				}
			}
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
	turnoutBox.classList.add('hide');
	showGameEl.classList.remove('hide');
	startNewGame20();
});

const startNewGame20 = () => {
	// Get image and name options
	newStudents();

		// Define amount of guesses
		let guesses = 20;
		// Correct guesses
		let correctGuesses = 0;
		// Wrong guesses
		let wrongGuesses = 0;

	optionButtons.addEventListener('click', e => {
		e.preventDefault();
		// Guesses countdown
		guesses--;

		if (e.target.innerText === trueStudent.name) {
			correctGuesses++;
			infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
		} else {
			wrongGuesses++;
			infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
		}

		setTimeout(() => {
			infoBox.innerHTML = ``;
				if (guesses > 0) {
				newStudents();
			} else {
				// console.log('The end');
				// console.log(`You had ${correctGuesses} correct guesses and ${wrongGuesses} wrong guesses`);
				showGameEl.classList.add('hide');
				turnoutBox.classList.remove('hide');
				if (correctGuesses <= 8) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/20 correct guesses. You can do better!</h3>`;
				} else if (correctGuesses >= 16) {
				turnoutBox.innerHTML = `<h3>${correctGuesses}/20 correct guesses. Great!</h3>`;
				} else {
				turnoutBox.innerHTML = `<h3>IMPRESSIVE! ${correctGuesses}/20 correct guesses.</h3>`;
				}
			}
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

			// Define amount of guesses
			let guesses = students.length;
			// Correct guesses
			let correctGuesses = 0;
			// Wrong guesses
			let wrongGuesses = 0;

	optionButtons.addEventListener('click', e => {
		e.preventDefault;

		guesses--;

		if (e.target.innerText === trueStudent.name) {
			correctGuesses++;
			infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
		} else {
			wrongGuesses++;
			infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
		}

		setTimeout(() => {
			infoBox.innerHTML = ``;
				if (guesses > 0) {
				newStudents();
			} else {
				// console.log('The end');
				// console.log(`You had ${correctGuesses} correct guesses and ${wrongGuesses} wrong guesses`);
				showGameEl.classList.add('hide');
				turnoutBox.classList.remove('hide');
				if (correctGuesses <= 20) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/${students.length} correct guesses. You can do better!</h3>`;
				} else if (correctGuesses >= 34) {
				turnoutBox.innerHTML = `<h3>${correctGuesses}/${students.length} correct guesses. Great!</h3>`;
				} else {
				turnoutBox.innerHTML = `<h3>IMPRESSIVE! ${correctGuesses}/${students.length} correct guesses.</h3>`;
				}
			}
		}, 1500);
	})
};

// /*
// * Reset game
// */

// resetGameEl.addEventListener('click', e => {
// 	console.log('Reset game', e.target);
// })
