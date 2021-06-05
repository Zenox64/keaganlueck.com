const addButton = document.getElementById("addButton");
const input = document.getElementById("input");
const output = document.getElementById("output");

const updateOutput = () => {
  output.innerHTML += "<li>" + input.value + "</li>" + "\n";
  output.style.color = "white";
  input.value = "";
};

input.addEventListener("keydown", (event) => {
  if (event.keyCode !== 13) {
    // Abort if not enter key
    return;
  }
  if (input.value === "") {
    // Abort if input is empty
    return;
  }
  if (event.shiftKey) {
    // Abort if shift is pressed
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  updateOutput();
  if (text === "delete") {
    output.innerHTML = "";
  }
});
addButton.addEventListener("click", updateOutput);
