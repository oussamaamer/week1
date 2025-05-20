// let pets = ["cat", "dog", "fish", "rabbit", "cow"];

// console.log(pets.slice(1, 2).toString());
// pets.splice(3, 1, "horse");
// console.log(pets.length);

// let a = parseInt(prompt("donner votre age"));

// a > 18 ? alert("marhba") : alert("ghayara");

/////////////////////////Exercise 1 :

// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// people.splice(2, 1, "Jason");
// people.push("oussama");
// console.log(people.indexOf("Mary"));
// const newPeople = people.slice(1,-1);
// console.log(people.indexOf("Foo")); //return -1 because Foo is undifinde
// let last = people[people.length - 1];
// for (let i of people) {
//   console.log(i);
// }

// for (let i of people) {
//   console.log(i);
//   if (i == "Devon") {
//     break;
//   }
// }
/////////////////////////Exercise 2 :
// let colors = ["green", "blue", "yellow", "purple", "pink"];
// for (let i in colors) {
//   console.log(`My #${parseInt(i) + 1} choice is ${colors[i]}`);
// }
// let tab = ["st", "nd", "rd", "th"];
// for (let i in colors) {
//   if ((parseInt(i) + 1) % 10 == 1) {
//     console.log(`My ${parseInt(i) + 1}${tab[0]} choice is ${colors[i]}`);
//   } else if ((parseInt(i) + 1) % 10 == 2) {
//     console.log(`My ${parseInt(i) + 1}${tab[1]} choice is ${colors[i]}`);
//   } else if ((parseInt(i) + 1) % 10 == 3) {
//     console.log(`My ${parseInt(i) + 1}${tab[2]} choice is ${colors[i]}`);
//   } else {
//     console.log(`My ${parseInt(i) + 1}${tab[3]} choice is ${colors[i]}`);
//   }
// }

///////////////////////Exercise 3 :
// let num;
// do {
//   num = parseInt(prompt("donner un nombre"));
// } while (num < 10);
// console.log(typeof num);

// /////////////////////////Exercise 4:
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
//   `${building.numberOfAptByFloor.firstFloor}
// ${building.numberOfAptByFloor.thirdFloor}`
// );

// console.log(
//   `name:${building.nameOfTenants[1]} apartment : ${building.numberOfRoomsAndRent.dan[0]}, number of rooms${building.numberOfRoomsAndRent.dan[1]}`
// );

// if (
//   building.numberOfRoomsAndRent.david[1] +
//     building.numberOfRoomsAndRent.sarah[1] >
//   building.numberOfRoomsAndRent.dan[1]
// ) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(building.numberOfRoomsAndRent.dan[1]);

// /////////////////////////Exercise 5:
// const family = {
//   name: "oussama",
//   last: "aitameur",
//   age: 21,
// };

// for (let i in family) {
//   console.log(i);
// }

// for (let i in family) {
//   console.log(family[i]);
// }

// /////////////////////////Exercise 6:
// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "reindeer",
// };
// let message = "";
// for (let i in details) {
//   message += `${i} ${details[i]} `;
// }
// console.log(message);

// /////////////////////////Exercise 7:
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const newN = names.sort();
// let a = "";
// for (let i in newN) {
//   a += newN[i][0];
// }
// console.log(a);
