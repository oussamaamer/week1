// let obj1 = {
//   FullName: "oussama aitameur",
//   Mass: 76,
//   height: 1.75,
//   BMI: function () {
//     return this.Mass / this.height ** 2;
//   },
// };

// let obj2 = {
//   FullName: "ashraf jabbari",
//   Mass: 90,
//   height: 1.76,
//   BMI: function () {
//     return this.Mass / this.height ** 2;
//   },
// };
// console.log(obj1.BMI().toFixed(2));

// function compare(a, b) {
//   a.BMI() > b.BMI() ? console.log(a.FullName) : console.log(b.FullName);
// }

// compare(obj1, obj2);

//////////////////////////////ex2

// function findAvg(...gradesList) {
//   let moyenne = 0;
//   for (let i in gradesList) {
//     moyenne += gradesList[i];
//   }
//   moyenne /= gradesList.length;
//   bonus(moyenne);
// }

// findAvg(10, 20, 30, 400);

// function bonus(a) {
//   a > 65 ? console.log("passed") : console.log("failed");
// }
