// //////////////////////////ex1
// function displayNumbersDivisible(a = 23) {
//   let sum = 0;
//   let outcome = [];
//   for (let i = 1; i <= 500; i++) {
//     if (i % a == 0) {
//       sum += parseInt(i);
//       outcome.push(i);
//     }
//   }
//   console.log(`outcoume : ${outcome.join(" ")}`);
//   console.log(`sum : ${sum}`);
// }

// displayNumbersDivisible(45);

// ///////////////////////ex2
// const stock = {
//   banana: 6,
//   apple: 0,
// //   pear: 12,
// //   orange: 32,
// //   blueberry: 1,
// // };

// // const prices = {
// //   banana: 4,
// //   apple: 2,
// //   pear: 1,
// //   orange: 1.5,
// //   blueberry: 10,
// // };

// // let shoppingList = ["banana", "orange", "apple"];
// // let total = 0;
// // const myBill = () => {
// //   for (let i in shoppingList) {
// //     if (stock[shoppingList[i]] !== 0) {
// //       total += prices[shoppingList[i]];
// //       --stock[shoppingList[i]];
// //     }
// //   }
// //   console.log(total);
// // };
// // myBill();
// // console.log(stock);

// ////////////////////////////3
// // function changeEnough(itemPrice, amountOfChange) {
// //   let sum = 0;
// //   let boom = [0.25, 0.1, 0.05, 0.01];
// //   for (let i in amountOfChange) {
// //     sum += amountOfChange[i] * boom[i];
// //   }
// //   if (sum >= itemPrice) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// // alert(changeEnough(0.75, [0, 0, 20, 5]));

// ////////////////////////////4
// function hotelCost() {
//   let n;
//   do {
//     n = parseInt(
//       prompt("Specify the number of nights they wish to stay at the hotel.")
//     );
//   } while (isNaN(n));
//   return n * 140;
// }

// function planeRideCost() {
//   let n;
//   do {
//     n = prompt(" destination");
//   } while (isNaN(n) == false);

//   if (n.toUpperCase() === "LONDON") {
//     return 183;
//   } else if (n.toUpperCase() === "PARIS") {
//     return 220;
//   } else {
//     return 300;
//   }
// }

// function rentalCarCost() {
//   let n;
//   do {
//     n = parseInt(prompt("How many days do you want to rent the car?"));
//   } while (isNaN(n));
//   if (n < 10) {
//     return n * 40;
//   } else return n * (40 - (40 * 5) / 100);
// }

// function totalVacationCost() {
//   let a = hotelCost();
//   let b = planeRideCost();
//   let c = rentalCarCost();
//   console.log(
//     `The car cost: ${c}, the hotel cost: ${a}, the plane tickets cost: ${b}`
//   );
// }
// totalVacationCost();

// /////////////////////////////////ex5:
// const containerDiv = document.getElementById("container");
// console.log(containerDiv.innerHTML);

// const allUl = document.querySelectorAll(".list");
// allUl[0].children[1].textContent = "Richard";

// allUl[1].removeChild(allUl[1].children[1]);

// allUl.forEach((ul) => {
//   ul.children[0].textContent = "Rafik";
// });

// allUl.forEach((ul) => {
//   ul.classList.add("student_list");
// });

// allUl[0].classList.add("university", "attendance");

// containerDiv.style.backgroundColor = "lightblue";
// containerDiv.style.padding = "10px";

// const allLi = document.querySelectorAll("li");
// allLi.forEach((li) => {
//   if (li.textContent === "Dan") {
//     li.style.display = "none";
//   }
// });

// allLi.forEach((li) => {
//   if (li.textContent === "Richard") {
//     li.style.border = "1px solid black";
//   }
// });

// document.body.style.fontSize = "18px";

// // Bonus

// const bgColor = window.getComputedStyle(containerDiv).backgroundColor;

// if (bgColor === "rgb(173, 216, 230)") {
//   const userLis = document.querySelectorAll(".student_list li");

//   const users = [];
//   userLis.forEach((li) => {
//     if (li.style.display !== "none") {
//       users.push(li.textContent);
//     }
//   });

//   alert(`Hello ${users.join(" and ")}`);
// }

/////////////////////////////6;

// const divNav = document.getElementById("navBar");
// divNav.setAttribute("id", "socialNetworkNavigation");

// const newLi = document.createElement("li");

// const logoutText = document.createTextNode("Logout");

// newLi.appendChild(logoutText);

// const ul = divNav.querySelector("ul");
// ul.appendChild(newLi);

// const firstLi = ul.firstElementChild;
// const lastLi = ul.lastElementChild;

// console.log("Premier lien :", firstLi.textContent);
// console.log("Dernier lien :", lastLi.textContent);

///////////////////////7;

// const allBooks = [
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//     image: "#",
//     alreadyRead: true,
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     image: "#",
//     alreadyRead: false,
//   },
// ];

// const section = document.querySelector(".listBooks");

// allBooks.forEach((book) => {
//   const bookDiv = document.createElement("div");

//   const bookInfo = document.createElement("p");
//   bookInfo.textContent = `${book.title} written by ${book.author}`;

//   if (book.alreadyRead) {
//     bookInfo.style.color = "red";
//   }

//   const img = document.createElement("img");
//   img.src = book.image;
//   img.style.width = "100px";

//   bookDiv.appendChild(bookInfo);
//   bookDiv.appendChild(img);

//   section.appendChild(bookDiv);
// });
