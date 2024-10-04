const inputField = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputField.addEventListener("input", (event) => {
  const input = event.currentTarget.value.trim();
  output.textContent = input === "" ? "Anonymous" : input;
});
