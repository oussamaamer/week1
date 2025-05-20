// let pets = ["cat", "dog", "fish", "rabbit", "cow"];

// console.log(pets.slice(1, 2).toString());
// pets.splice(3, 1, "horse");
// console.log(pets.length);

// let a = parseInt(prompt("donner votre age"));

// a > 18 ? alert("marhba") : alert("ghayara");

/////////////////////////Exercise 1 :

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2, 1, "Jason");
people.push("oussama");
console.log(people.indexOf("Mary"));
const newPeople = people.slice(1);
console.log(people.indexOf("Foo")); //return -1 because Foo is undifinde
let last = people[people.length - 1];
for (let i of people) {
  console.log(i);
}

for (let i of people) {
  console.log(i);
  if (i == "Devon") {
    break;
  }
}

/////////////////////////Exercise 2 :
