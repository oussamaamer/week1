// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people);
// people[people.length - 1] = "jason";
// people.push("oussama");
// console.log(people.indexOf("Mary"));
// console.log(people);
// const arr = people.slice(1, 3);
// console.log(arr);
// console.log(people.indexOf("Foo"));
// const last = people[people.length - 1];
// console.log(last);

// for (let i of people) {
//   console.log(i);
// }

// for (let i of people) {
//   console.log(i);
//   if (i == "Devon") {
//     break;
//   }
// }

// const colors = [
//   "green",
//   "blue",
//   "yellow",
//   "orange",
//   "pink",
//   "j",
//   "l",
//   "m",
//   "q",
//   "d",
//   "m",
//   "r",
//   "e",
//   "j",
// ];
// for (let i in colors) {
//   console.log(`My #${parseInt(i) + 1} choice is ${colors[i]}`);
// }

// for (let i in colors) {
//   if ((parseInt(i) + 1) % 10 == 1) {
//     console.log(`My ${parseInt(i) + 1}st choice is ${colors[i]}`);
//   } else if ((parseInt(i) + 1) % 10 == 2) {
//     console.log(`My ${parseInt(i) + 1}nd choice is ${colors[i]}`);
//   } else if ((parseInt(i) + 1) % 10 == 3) {
//     console.log(`My ${parseInt(i) + 1}rd choice is ${colors[i]}`);
//   } else {
//     console.log(`My ${parseInt(i) + 1}th choice is ${colors[i]}`);
//   }
// }
// let number;
// do {
//   number = parseInt(prompt("donner un nombre"));
// } while (number < 10);

// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };
// console.log(building.numberOfFloors);
// console.log(
//   `firstfloor : ${building.numberOfAptByFloor.firstFloor}</br>thirdhloor: ${building.numberOfAptByFloor.thirdFloor}`
// );

// if (
//   building.numberOfRoomsAndRent.sarah[1] +
//     building.numberOfRoomsAndRent.david[1] >
//   building.numberOfRoomsAndRent.dan[1]
// ) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(building);

// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "reindeer",
// };

// for (let i in details) {
//   console.log(i);
// }

// console.log("=================================");

// for (let i in details) {
//   console.log(details[i]);
// }

// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "reindeer",
// };
// let cc = "";
// for (let i in details) {
//   cc += i + " " + details[i] + " ";
// }
// console.log(cc);

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let cc = "";
// for (let i in names) {
//   cc += names[i][0];
// }
// console.log(cc);
