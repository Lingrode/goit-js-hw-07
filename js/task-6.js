function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let sizes = 30;

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let boxesMarkup = "";

  for (let i = 0; i < amount; i++) {
    boxesMarkup += `<div style="width: ${sizes + i * 10}px; 
    height: ${sizes + i * 10}px; 
    background-color: ${getRandomHexColor()}"></div>`;
  }

  boxesContainer.insertAdjacentHTML("afterbegin", boxesMarkup);
}

function destroyBoxes() {
  input.value = "";
  boxesContainer.innerHTML = "";
}
