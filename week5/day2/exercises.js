///////////////////ex1:
// const apiUrl =
//   "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("Successfully fetched data!");

//     if (data.data && data.data.length > 0) {
//       console.log(`Found ${data.data.length} gifs:`);
//       data.data.forEach((gif, index) => {
//         console.log(`${index + 1}. ${gif.title} - ${gif.url}`);
//       });
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//////////////////////ex2:
// const apiUrl =
//   "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Successfully fetched sun GIFs:", data);

//     console.log("\nDetails of the 10 sun GIFs (starting from position 2):");
//     data.data.forEach((gif, index) => {
//       console.log(
//         `\nGIF ${index + 1} (Actual position ${index + 3} in full results):`
//       );
//       console.log(`Title: ${gif.title}`);
//       console.log(`URL: ${gif.url}`);
//       console.log(`Direct GIF link: ${gif.images.original.url}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching sun GIFs:", error);
//   });

/////////////////////ex3:
// async function fetchStarship() {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/");

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data.result);

//     return data.result;
//   } catch (error) {
//     console.error("Error fetching starship data:", error);

//     throw error;
//   }
// }

// fetchStarship();
