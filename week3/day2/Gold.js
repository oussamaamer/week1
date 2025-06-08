// ////////////////////////////ex1:
// let numbers = [123, 8409, 100053, 333333333, 7];
// for (let i in numbers) {
//   if (numbers[i] % 3 == 0) {
//     console.log(`${numbers[i]} : true`);
//   } else {
//     console.log(`${numbers[i]} : false`);
//   }
// }

//////////////////////////////ex2:
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina",
// };

// let nom = prompt("donner votre nom :");
// let cmp = 0;
// for (let i in guestList) {
//   if (i == nom) {
//     console.log(`Hi! I'm ${i}, and I'm from ${guestList[i]}`);
//     break;
//   }
//   ++cmp;
// }
// if (cmp == Object.keys(guestList).length) {
//   console.log("Hi! I'm a guest");
// }

///////////////////////////ex3:
// let age = [20, 5, 12, 43, 98, 55];
// sum = age.reduce((a, b) => a + b);
// console.log(sum);
// highest = age.reduce((a, b) => (a > b ? a : b));
// console.log(highest);
