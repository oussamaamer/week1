////////////////////1st daily challenge
// function makeAllCaps(words) {
//   return new Promise((resolve, reject) => {
//     if (words.every((word) => typeof word === "string")) {
//       const uppercased = words.map((word) => word.toUpperCase());
//       resolve(uppercased);
//     } else {
//       reject("Array contains non-string elements");
//     }
//   });
// }

// function sortWords(words) {
//   return new Promise((resolve, reject) => {
//     if (words.length > 4) {
//       const sorted = [...words].sort();
//       resolve(sorted);
//     } else {
//       reject("Array length must be greater than 4");
//     }
//   });
// }

// makeAllCaps([1, "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

////////////////2nd daily challenge:
// 1. Convert JSON string to JS object
// const morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`;
// function toJs() {
//   return new Promise((resolve, reject) => {
//     try {
//       const morseJS = JSON.parse(morse);
//       if (Object.keys(morseJS).length === 0) {
//         reject("Morse JavaScript object is empty");
//       } else {
//         resolve(morseJS);
//       }
//     } catch (error) {
//       reject("Error parsing JSON");
//     }
//   });
// }

// function toMorse(morseJS) {
//   return new Promise((resolve, reject) => {
//     const userInput = prompt("Enter a word or sentence:").toLowerCase();
//     const inputArray = userInput.split("");

//     const invalidChars = inputArray.filter((char) => !morseJS[char]);

//     if (invalidChars.length > 0) {
//       reject(
//         `Character(s) "${invalidChars.join("")}" don't exist in Morse code`
//       );
//     } else {
//       const morseTranslation = inputArray.map((char) => morseJS[char]);
//       resolve(morseTranslation);
//     }
//   });
// }

// function joinWords(morseTranslation) {
//   const morseString = morseTranslation.join("\n");
//   document.body.innerHTML = `<pre>${morseString}</pre>`;
// }

// toJs()
//   .then((morseJS) => toMorse(morseJS))
//   .then((morseTranslation) => joinWords(morseTranslation))
//   .catch((error) => {
//     console.error(error);
//     alert(error);
//   });
