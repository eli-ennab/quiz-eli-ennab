/*
* 10 students only
*/

const gameOptions = document.querySelector('.game-options');
// let trueStudent;
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

const randomStudents = students.map(student => student)
shuffleRandomStudent(randomStudents);
const studentNames = randomStudents.map(student=> student.name);

let trueStudent;
let falseStudents;
let allTrueStudents;

// Slice 10 true students
allTrueStudents = randomStudents.map(student => student)
allTrueStudents = (allTrueStudents.slice(0, 10));

function newStudents() {
	// A new true student
	trueStudent = allTrueStudents.shift();

	// The true students image
	const trueStudentImage = trueStudent;
	const image = document.querySelector('#studentImage');
	image.src = `${trueStudentImage.image}`;

	// Filter to get all false students
	falseStudents = studentNames.filter(name => name !== trueStudent.name);

	// Shuffle all false students
    // shuffleRandomStudent(falseStudents);

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

newStudents();

gameOptions.addEventListener('click', e => {
	e.preventDefault();
	// console.log('You clicked the options.', e.target);

	if (e.target !== trueStudent.name) {
        infoBox.innerHTML = `<h4>FALSE<h4>`;
		console.log('Red');
	} else {
        infoBox.innerHTML = `<h4>TRUE<h4>`;
		console.log('Green');
    }
})

const startNewGame10 = () => {
	// // Shuffle all the students
	// shuffleRandomStudent(students);

    // // Getting true student
    // newTrueStudent();

    // // Getting false students
    // newFalseStudent();

	newStudents();
}

btn10.addEventListener('click', e => {
    startNewGame10();
});

/*
* 20 students only
*/

const startNewGame20 = () => {
	// Shuffle all the students
	shuffleRandomStudent(students);

    // Getting true student
    newTrueStudent();

    // Getting false students
    newFalseStudent();
}

btn20.addEventListener('click', e => {
    startNewGame20();
});

/*
* ALL students
*/

const startNewGameAll = () => {
	// Shuffle all the students
	shuffleRandomStudent(students);

    // Getting true student
    newTrueStudent();

    // Getting false students
    newFalseStudents();
}

btnAll.addEventListener('click', e => {
    startNewGameAll();
});