const gameOptions = document.querySelector('#gameOptions');

// Get the random 3 false names

function getRandomStudents(students, num) {
    const shuffledStudents = [...students].sort(() => 0.5 - Math.random());
  
    return shuffledStudents.slice(0, num);
  }
console.log(getRandomStudents(students, 3));

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

const randomStudentImage = students.find(student => student);   // Random students name's image
console.log(randomStudentImage.image);
const image = document.querySelector('#studentImage');          // Random student into DOM
image.src = `${randomStudentImage.image}`;

// Random true students name
const randomCorrectStudentName = students.find(student => student);
console.log(randomCorrectStudentName.name);

// And into DOM
const trueStudent = document.querySelector('#option1');
trueStudent.innerHTML = `<p class="studentName1">${randomCorrectStudentName.name}</p>`;

// // And random 3 false names into DOM
// const falseStudent1 = document.querySelector('#option2');
// falseStudent1.innerHTML = `<p class="studentName2">${students.name}</p>`;

// const falseStudent2 = document.querySelector('#option3');
// falseStudent2.innerHTML = `<p class="studentName3">${students.name}</p>`;

// const falseStudent3 = document.querySelector('#option4');
// falseStudent3.innerHTML = `<p class="studentName4">${students.name}</p>`;