const inputContainer = document.querySelector(".container");
const outputSection = document.querySelector("#outputSection");
const createButton = document.querySelector("#createButton");

const createInputComponent = () => {
  outputSection.innerHTML = inputContainer.value;
  outputSection.classList.add("borderSection");
  addDeleteButton();
}

createButton.addEventListener("click", createInputComponent);

const addDeleteButton = () => {
  outputSection.innerHTML += `<button id="deleteButton">Delete</button>`;
  const deleteInput = document.querySelector("#deleteButton");
  deleteInput.addEventListener("click", () => {
    outputSection.innerHTML = "";
    outputSection.classList.remove("borderSection");
  })
}