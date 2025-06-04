// // // //////////////////////////////ex1:
// // // const person = {
// // //   name: "John Doe",
// // //   age: 25,
// // //   location: {
// // //     country: "Canada",
// // //     city: "Vancouver",
// // //     coordinates: [49.2827, -123.1207],
// // //   },
// // // };

// // // const {
// // //   name,
// // //   location: {
// // //     country,
// // //     city,
// // //     coordinates: [lat, lng],
// // //   },
// // // } = person;

// // // console.log(
// // //   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// // // );
// // // //I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// // // //////////////////////////ex2:
// // // function displayStudentInfo({ first, last }) {
// // //   return `Your full name is ${first} ${last}`;
// // // }

// // // console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));//Your full name is Elie Schoppik

// // // ///////////////////////////////ex3:
// // // const users = { user1: 18273, user2: 92833, user3: 90315 };
// // // const usersArray = Object.entries(users);
// // // console.log(usersArray);

// // // const updatedUsers = Object.entries(users).map(([user, id]) => [user, id * 2]);
// // // console.log(updatedUsers);

// // // ////////////////////////////////////////ex4:
// // // class Person {
// // //   constructor(name) {
// // //     this.name = name;
// // //   }
// // // }

// // // const member = new Person("John");
// // // console.log(typeof member);//"object"

// // ////////////////////////5:
// // class Dog {
// //   constructor(name) {
// //     this.name = name;
// //   }
// // }

// // //#1
// // class Labrador extends Dog {
// //   constructor(name, size) {
// //     this.size = size;
// //   }
// // }
// // //Must call super constructor in derived class before accessing 'this'

// // //#2
// // class Labrador extends Dog {
// //   constructor(name, size) {
// //     super(name);
// //     this.size = size;
// //   }
// // }
// // //Correct

// // //#3
// // class Labrador extends Dog {
// //   constructor(size) {
// //     super(name);
// //     this.size = size;
// //   }
// // }
// // //ReferenceError: name is not defined

// // //#4
// // class Labrador extends Dog {
// //   constructor(name, size) {
// //     this.name = name;
// //     this.size = size;
// //   }
// // }
// // //Must call super constructor in derived class before accessing 'this'

// // [2] === [2]   // false
// // {} === {}     // false
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;

// console.log(object2.number); // 4
// console.log(object3.number); // 4
// console.log(object4.number); // 5

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mammal extends Animal {
//   sound(sound) {
//     return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
//   }
// }

// const farmerCow = new Mammal("Lily", "cow", "brown and white");

// console.log(farmerCow.sound("Moooo")); //"Moooo I'm a cow, named Lily and I'm brown and white"
