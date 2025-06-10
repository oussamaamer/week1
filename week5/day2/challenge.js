const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search-input");
const gifsContainer = document.getElementById("gifs-container");
const deleteAllBtn = document.getElementById("delete-all");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    try {
      const gifUrl = await fetchRandomGif(searchTerm);
      appendGif(gifUrl, searchTerm);
      searchInput.value = "";
    } catch (error) {
      console.error("Error fetching GIF:", error);
      alert("Failed to fetch GIF. Please try again.");
    }
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifsContainer.innerHTML = "";
});

async function fetchRandomGif(searchTerm) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}&rating=g`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data.images.original.url;
}

function appendGif(gifUrl, searchTerm) {
  const gifItem = document.createElement("div");
  gifItem.className = "gif-item";

  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = searchTerm;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", () => {
    gifItem.remove();
  });

  gifItem.appendChild(img);
  gifItem.appendChild(deleteBtn);
  gifsContainer.appendChild(gifItem);
}
