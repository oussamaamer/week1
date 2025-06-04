// ////////////////////////ex1:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//   console.log(`${index + 1} choice is ${color}.`);
// });

// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }

// /////////////////////ex2:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   const number = index + 1;
//   const suffix =
//     number % 100 >= 11 && number % 100 <= 13
//       ? ordinal[0]
//       : number % 10 <= 3
//       ? ordinal[number % 10]
//       : ordinal[0];

//   console.log(`${number}${suffix} choice is ${color}.`);
// });

// ////////////////////////////////ex3:
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ["bread", ...vegetables, "chicken", ...fruits];
// console.log(result); //["bread", "carrot", "potato", "chicken", "apple", "orange"]

// const country = "USA";
// console.log([...country]); //['U', 'S', 'A']

// let newArray = [...[, ,]];
// console.log(newArray);// [undefined, undefined]

//////////////////////////////////ex4:
// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];
// const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
// console.log(welcomeStudents);

// const fullStackResidents = users.filter(
//   (user) => user.role === "Full Stack Resident"
// );
// console.log(fullStackResidents);

// const lastNamesOfFSR = users
//   .filter((user) => user.role === "Full Stack Resident")
//   .map((user) => user.lastName);

// console.log(lastNamesOfFSR);

//////////////////////////ex5:
// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
// const epicSentence = epic.reduce((accumulator, currentWord) => {
//   return `${accumulator} ${currentWord}`;
// });

// console.log(epicSentence);

///////////////////////ex6:
// const students = [
//   { name: "Ray", course: "Computer Science", isPassed: true },
//   { name: "Liam", course: "Computer Science", isPassed: false },
//   { name: "Jenner", course: "Information Technology", isPassed: true },
//   { name: "Marco", course: "Robotics", isPassed: true },
//   { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
//   { name: "Jamie", course: "Big Data", isPassed: false },
// ];

// const passedStudents = students.filter((student) => student.isPassed === true);
// console.log(passedStudents);

// students
//   .filter((student) => student.isPassed)
//   .forEach((student) => {
//     console.log(
//       `Good job ${student.name}, you passed the course in ${student.course}`
//     );
//   });
