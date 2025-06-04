// // ////////////////////ex1
// // // #1
// // function funcOne() {
// //   let a = 5;
// //   if (a > 1) {
// //     a = 3;
// //   }
// //   alert(`inside the funcOne function ${a}`);
// // }
// // funcOne();//inside the funcOne function 3
// // // #1.1
// // funcOne();
// // // #1.2 If 'a' is declared with const: will throw a TypeError

// //#2
// // let a = 0;
// // function funcTwo() {
// //     a = 5;
// // }
// // function funcThree() {
// //     alert(`inside the funcThree function ${a}`);
// // }
// // funcThree(); // affiche 0
// // funcTwo();   // modifie `a` à 5
// // funcThree(); // affiche 5
// // // #1.2 If 'a' is declared with const: will throw a TypeError

// //#3
// // function funcFour() {
// //   window.a = "hello";
// // }

// // function funcFive() {
// //   alert(`inside the funcFive function ${a}`);
// // }

// // // #3.1 - run in the console:
// // funcFour();
// // funcFive();//inside the funcFive function hello

// // //#4
// // let a = 1;
// // function funcSix() {
// //     let a = "test";
// //     alert(`inside the funcSix function ${a}`);
// // }
// // funcSix(); // affiche : test
// // if the variable is declared with const instead of let no error.

// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);// 5
// }
// alert(`outside of the if block ${a}`);// 2

// //if the variable is declared with const instead of letworks fine

// ///////////////////////////////ex2
// const winBattle = () => true;

// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);

// ///////////////////ex3:
// const isString = value => typeof value === 'string';

// console.log(isString('hello'));          // true
// console.log(isString([1, 2, 4, 0]));     // false

// ///////////////////////////ex4:
// const sum = (a, b) => a + b;
// console.log(sum(33, 2)); // 35

/////////////////////////ex5:
// function convertKgToGrams(weightInKg) {
//     return weightInKg * 1000;
// }

// console.log(convertKgToGrams(5));

// const convertKgToGramsExpr = function(weightInKg) {
//     return weightInKg * 1000;
// };

// console.log(convertKgToGramsExpr(6));

// const convertKgToGramsArrow = kg => kg * 1000;

// console.log(convertKgToGramsArrow(7));

// //////////////////////////////ex6:
// (function (children, partner, location, job) {
//   const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
//   document.body.innerHTML = `<p>${message}</p>`;
// })(10, "razan", "china", "benay");

// ////////////////////ex7:
// (function (userName) {
//   const navbar = document.getElementById("navbar");

//   const userDiv = document.createElement("div");
//   userDiv.className = "user-info";
//   userDiv.style.display = "flex";
//   userDiv.style.alignItems = "center";
//   userDiv.style.gap = "10px";

//   const nameSpan = document.createElement("span");
//   nameSpan.textContent = `Welcome, ${userName}!`;

//   const profilePic = document.createElement("img");
//   profilePic.src = "#";
//   profilePic.alt = `${userName}'s profile picture`;

//   // Ajout des éléments dans la navbar
//   userDiv.appendChild(nameSpan);
//   userDiv.appendChild(profilePic);
//   navbar.appendChild(userDiv);
// })("oussama");

///////////////////////ex8:
// function makeJuice(size) {
//   function addIngredients(ing1, ing2, ing3) {
//     const output = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
//     document.getElementById("juice-output").innerHTML = `<p>${output}</p>`;
//   }

//   addIngredients("peach", "orange", "grapes");
// }

// makeJuice("large");

// function makeJuice(size) {
//   const ingredients = [];

//   function addIngredients(ing1, ing2, ing3) {
//     ingredients.push(ing1, ing2, ing3);
//   }

//   function displayJuice() {
//     const output = `The client wants a ${size} juice, containing ${ingredients.join(
//       ", "
//     )}.`;
//     document.getElementById("juice-output").innerHTML = `<p>${output}</p>`;
//   }

//   addIngredients("apple", "banana", "mango");
//   addIngredients("kiwi", "pineapple", "orange");

//   displayJuice();
// }

// makeJuice("medium");
