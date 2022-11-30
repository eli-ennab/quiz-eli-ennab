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
console.log(randomStudents);
shuffleRandomStudent(randomStudents);

// True students

// Slice 10 true students
let trueStudent = randomStudents.map(student => student)
trueStudent = (trueStudent.slice(0, 10));
console.log(trueStudent);

function newTrueStudent() {
	const randomStudentImage = trueStudent[0];   	                            // Random students name's image
	const image = document.querySelector('#studentImage');          	        // Random student into DOM
	image.src = `${randomStudentImage.image}`;

	const randomCorrectStudentName = trueStudent.find(student => student);	    // Random true students name
	trueStudent = document.querySelector('#option1');				            // And into DOM
	trueStudent.textContent = `${randomCorrectStudentName.name}`;
};

// // A copy of the array with false names
// falseStudent = students.map(student => student)
// console.log(falseStudent);

function newFalseStudent() {
    // WHAT TO DO!
};

gameOptions.addEventListener('click', e => {
	e.preventDefault();
	// console.log('You clicked the options.', e.target);

	if (e.target !== trueStudent) {
        infoBox.innerHTML = `<h4>FALSE<h4>`;
		console.log('Red');
	} else {
        infoBox.innerHTML = `<h4>TRUE<h4>`;
		console.log('Green');
    }
})

const startNewGame10 = () => {
	// Shuffle all the students
	shuffleRandomStudent(students);

    // Getting true student
    newTrueStudent();

    // Getting false students
    newFalseStudent();
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