// const planets = [
//   { name: "Mercury", colorClass: "mercury", moons: 0 },
//   { name: "Venus", colorClass: "venus", moons: 0 },
//   { name: "Earth", colorClass: "earth", moons: 1 },
//   { name: "Mars", colorClass: "mars", moons: 2 },
//   { name: "Jupiter", colorClass: "jupiter", moons: 79 },
//   { name: "Saturn", colorClass: "saturn", moons: 82 },
//   { name: "Uranus", colorClass: "uranus", moons: 27 },
//   { name: "Neptune", colorClass: "neptune", moons: 14 },
// ];

// const section = document.querySelector(".listPlanets");

// const MAX_MOONS_DISPLAY = 10;

// function createMoons(planetDiv, moonCount) {
//   if (moonCount === 0) return;

//   const moonsToShow = Math.min(moonCount, MAX_MOONS_DISPLAY);

//   for (let i = 0; i < moonsToShow; i++) {
//     const moon = document.createElement("div");
//     moon.classList.add("moon");

//     const angle = (360 / moonsToShow) * i;
//     const radius = 70;

//     const rad = (angle * Math.PI) / 180;

//     moon.style.top = `${50 + radius * Math.sin(rad)}px`;
//     moon.style.left = `${50 + radius * Math.cos(rad)}px`;

//     planetDiv.appendChild(moon);
//   }
// }

// planets.forEach((planet) => {
//   const planetDiv = document.createElement("div");
//   planetDiv.classList.add("planet", planet.colorClass);

//   planetDiv.textContent = planet.name;
//   planetDiv.style.color = "white";
//   planetDiv.style.fontWeight = "bold";
//   planetDiv.style.lineHeight = "100px";

//   createMoons(planetDiv, planet.moons);

//   section.appendChild(planetDiv);
// });
