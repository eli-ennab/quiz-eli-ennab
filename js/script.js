// Testing

// All students names
// const studentName = students.map(student => student.name);
// console.log("All students names:", studentName);

// All students (source of) images 
const studentImage = students.map(student => student.image);
console.log("All students images:", studentImage);

// Finding a specific student

// Finding a specific student whose id is '12'
const randomStudent = students.find(obj => obj.id === 12);

// Printing specific student on the console
console.log(randomStudent);

// Printing specific student image source on the console
console.log(randomStudent.image);
const image = document.querySelector('#studentImage');
image.src = `${randomStudent.image}`;

// // Printing all images
// const image = document.querySelector('#studentImage');
// image.src = `${studentImage.image}`;

