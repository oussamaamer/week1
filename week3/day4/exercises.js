// // // //////////////////////ex1
// // const h = document.querySelector("article h1").innerHTML;
// // console.log(h);

// // const article = document.querySelector("article");
// // const paragraphs = article.querySelectorAll("p");
// // const lastParagraph = paragraphs[paragraphs.length - 1];
// // article.removeChild(lastParagraph);

// // const h2 = article.querySelector("h2");
// // h2.addEventListener("click", () => {
// //   h2.style.color = "red";
// // });

// // const h3 = article.querySelector("h3");
// // h3.addEventListener("click", () => {
// //   h3.style.display = "none";
// // });

// // const btn = document.getElementById("boldBtn");
// // btn.addEventListener("click", () => {
// //   const allParagraphs = article.querySelectorAll("p");
// //   allParagraphs.forEach((p) => {
// //     p.style.fontWeight = "bold";
// //   });
// // });

// // // ////////////////////////ex2
// // const frm = document.querySelector("form");
// // console.log(frm.innerHTML);

// // const inptf = document.getElementById("fname");
// // const inptl = document.getElementById("lname");
// // console.log(inptf.textContent);
// // console.log(inptl.textContent);

// // const inputn = document.querySelector('input[name="firstname"]');
// // const inputl = document.querySelector('input[name="lastname"]');
// // console.log(inputn.textContent);
// // console.log(inputl.textContent);

// // const firstNameValue = inptf.value.trim();
// // const lastNameValue = inptl.value.trim();

// // frm.addEventListener("submit", function (event) {
// //   event.preventDefault();
// //   const firstNameValue = inptf.value.trim();
// //   const lastNameValue = inptl.value.trim();

// //   if (firstNameValue === "" || lastNameValue === "") {
// //     alert("Please fill out both first name and last name.");
// //     return;
// //   }

// //   const usersAnswerUl = document.querySelector(".usersAnswer");

// //   usersAnswerUl.innerHTML = "";

// //   const liFirstName = document.createElement("li");
// //   liFirstName.textContent = firstNameValue;

// //   const liLastName = document.createElement("li");
// //   liLastName.textContent = lastNameValue;

// //   usersAnswerUl.appendChild(liFirstName);
// //   usersAnswerUl.appendChild(liLastName);
// // });

// // //////////////////////////////ex3

// // let allBoldItems;
// // function getBoldItems() {
// //   allBoldItems = document.querySelectorAll("p strong");
// // }
// // function highlight() {
// //   allBoldItems.map((el) => {
// //     el.style.color = "blue";
// //   });
// // }
// // function returnItemsToDefault() {
// //   allBoldItems.map((el) => {
// //     el.style.color = "black";
// //   });
// // }

// // getBoldItems();

// // const paragraph = document.querySelector("p");
// // paragraph.addEventListener("mouseover", highlight);
// // paragraph.addEventListener("mouseout", returnItemsToDefault);

// //////////////////////////ex4
// const form = document.getElementById("MyForm");
// const radiusInput = document.getElementById("radius");
// const volumeInput = document.getElementById("volume");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const radius = parseFloat(radiusInput.value);

//   // Vérifier que c'est un nombre positif
//   if (isNaN(radius) || radius <= 0) {
//     alert("Please enter a valid positive number for the radius.");
//     volumeInput.value = "";
//     return;
//   }

//   // Calcul du volume de la sphère : (4/3) * π * r³
//   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

//   // Afficher le résultat dans le champ volume avec 3 décimales
//   volumeInput.value = volume.toFixed(3);
// });
