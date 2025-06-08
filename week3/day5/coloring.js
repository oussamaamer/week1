const grid = document.getElementById("grid");
const clearBtn = document.querySelector(".clear-btn");
const colorButtons = document.querySelectorAll(".color");

let isDrawing = false;

for (let i = 0; i < 17 * 32; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("mousedown", () => {
    isDrawing = true;
    cell.style.backgroundColor = currentColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isDrawing) {
      cell.style.backgroundColor = currentColor;
    }
  });

  grid.appendChild(cell);
}

document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentColor = button.dataset.color;
  });
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
