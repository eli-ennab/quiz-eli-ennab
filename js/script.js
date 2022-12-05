/*-------------------------------------------*\
   JS Script Index
 
   - Document query selector of all elements and into DOM
   - Copy of list and the (Fisher-Yates) shuffle
   - Start new game
   - Play game
		- Game option: 10 students
		- Game option: 20 students
		- Game option: All students
\*-------------------------------------------*/

/*
*  Document query selector of all elements and into DOM
*/

// The game
const showGameEl = document.querySelector('#game');							// Showing the game when user have chosen game options 10, 20 or all
const image = document.querySelector('#studentImage');						// The student's image
const infoBox = document.querySelector('#infoBox');							// Response in game, true or false
const turnoutBox = document.querySelector('#turnoutBox');					// Results in the end of the game

// Buttons
const startNewGame = document.querySelector('#btnstartNewGame');			// Start new game button
const gameModeEl = document.querySelector('#gameMode');						// Game option buttons for hiding elements
const optionButtons = document.querySelector('#optionButtons');				// Game option buttons for click event
const gameButtons = document.querySelectorAll('.game-options');				// The student name option buttons

// Buttons to the DOM
const nbrOfGames10 = document.querySelector('.nbrOfGames10').innerText += "10 students";
const nbrOfGames20 = document.querySelector('.nbrOfGames20').innerText += "20 students";
const nbrOfGamesAll = document.querySelector('.nbrOfGamesAll').innerText += "All students";
const btnstartNewGame = document.querySelector('.btnstartNewGame').innerText = "Start new game";

// h1 and h2 to the DOM
const h1 = document.querySelector('#h1').innerText = "Match the face with the name";
const h2 = document.querySelector('#h2').innerText = "Select gamemode";

/*
*  Copy of list and the (Fisher-Yates) shuffle
*/

const randomStudents = students.map(student => student)						// A new undestructive list
const studentNames = randomStudents.map(student=> student.name);			// A list of arrays

let trueStudent;
let falseStudents;
let allTrueStudents;
let falseStudent;

// Shuffle the students
const shuffleRandomStudent = (students) => {
	for (let i = students.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = students[i];
		students[i] = students[j];
		students[j] = temp;
	}
}

shuffleRandomStudent(randomStudents);										// Shuffle the new list

/*
* Start new game
*/

startNewGame.addEventListener('click', (e) => {
	startNewGame.classList.add('hide')
	gameModeEl.classList.remove('hide');
	turnoutBox.classList.add('hide');

 });

 /*
 * Show and hide game elements (usen when results show)
 */

 function showAndHideEl() {
	showGameEl.classList.add('hide');
	turnoutBox.classList.remove('hide');
	startNewGame.classList.remove('hide');
 }

 /*
 * New student
 */

 function newStudents() {
	trueStudent = allTrueStudents.shift();												// A new true student
	const image = document.querySelector('#studentImage');								// The true students image
	image.src = `${trueStudent.image}`;
	falseStudents = studentNames.filter(name => name !== trueStudent.name);				// Filter to get all false students
	shuffleRandomStudent(falseStudents);												// Shuffle all false students
	const falseStudentName = falseStudents.slice(0, 3);									// Get three false student names
	const options = [...falseStudentName, trueStudent.name];							// Create a new array with four options (one true and three false)
	shuffleRandomStudent(options);														// Then shuffle the current options
	const gameButtons = document.querySelectorAll('.game-options');						// Get the options out to the DOM, randomized
	for (let i=0; i < gameButtons.length; i++) {
		gameButtons[i].innerHTML = options[i];
	}
};

	/*
	*  Game option: 10 students
	*/

	// Slice 10 true students
	allTrueStudents = randomStudents
		.map(student => student)
		.slice(0, 10);

	btn10.addEventListener('click', e => {
		turnoutBox.classList.add('hide');
		startNewGame.classList.add('hide');
		showGameEl.classList.remove('hide');
		startNewGame10();
	});

	const startNewGame10 = () => {
		// Get image and name options
		newStudents();

		gameModeEl.classList.add('hide');
		startNewGame.classList.add('hide');

		let guesses = 10;
		let correctGuesses = 0;

		optionButtons.addEventListener('click', e => {
			e.preventDefault();

			guesses--;

			if (e.target.innerText === trueStudent.name) {
				correctGuesses++;
				infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
			} else {
				infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
			}

			setTimeout(() => {
				infoBox.innerHTML = ``;
					if (guesses > 0) {
					newStudents();
				} else {
					guesses = 10;
					showAndHideEl();
					if (correctGuesses <= 4) {
						turnoutBox.innerHTML = `<h3>${correctGuesses}/10 correct guesses. You can do better!</h3>`;
					} else if (correctGuesses >= 8) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/10 correct guesses. Great!</h3>`;
					};
				}
			}, 1000);
		})
	}

	/*
	* Game option: 20 students
	*/

	// Slice 20 true students
	allTrueStudents = randomStudents
		.map(student => student)
		.slice(0, 20);

	btn20.addEventListener('click', e => {
		turnoutBox.classList.add('hide');
		showGameEl.classList.remove('hide');
		startNewGame20();
	});

	const startNewGame20 = () => {
		newStudents();																			// Get image and name options
		
		gameModeEl.classList.add('hide');
		startNewGame.classList.add('hide');

			let guesses = 20;																	// Define amount of guesses
			let correctGuesses = 0;																// Correct guesses

		optionButtons.addEventListener('click', e => {
			e.preventDefault();

			guesses--;																			// Guesses countdown

			if (e.target.innerText === trueStudent.name) {
				correctGuesses++;
				infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
			} else {
				infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
			}

			setTimeout(() => {
				infoBox.innerHTML = ``;
					if (guesses > 0) {
					newStudents();
				} else {
					guesses = 20;
					showAndHideEl();
					if (correctGuesses <= 8) {
						turnoutBox.innerHTML = `<h3>${correctGuesses}/20 correct guesses. You can do better!</h3>`;
					} else if (correctGuesses >= 16) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/20 correct guesses. Great!</h3>`;
					};
				}
			}, 1000);
		})
	}

	/*
	*  Game option: All students
	*/

	// All true students
	allTrueStudents = randomStudents.map(student => student)

	btnAll.addEventListener('click', e => {
		const showGameEl = document.querySelector('#game');
		showGameEl.classList.remove('hide');
		startNewGameAllStudents();
	});

	startNewGameAllStudents = (e) => {
		newStudents();

		gameModeEl.classList.add('hide');
		startNewGame.classList.add('hide');

		let guesses = students.length;
		let correctGuesses = 0;

		optionButtons.addEventListener('click', e => {
			e.preventDefault;

			guesses--;

			if (e.target.innerText === trueStudent.name) {
				correctGuesses++;
				infoBox.innerHTML = `<h4><span class="success">TRUE</span><h4>`;
			} else {
				infoBox.innerHTML = `<h4><span class="fail">FALSE</span><h4>`;
			}

			setTimeout(() => {
				infoBox.innerHTML = ``;
					if (guesses > 0) {
					newStudents();
				} else {
					guesses = students.length;
					showAndHideEl();
					if (correctGuesses <= 20) {
						turnoutBox.innerHTML = `<h3>${correctGuesses}/${students.length} correct guesses. You can do better!</h3>`;
					} else if (correctGuesses >= 34) {
					turnoutBox.innerHTML = `<h3>${correctGuesses}/${students.length} correct guesses. Great!</h3>`;
					};
				}
			}, 1000);
		})
	};
