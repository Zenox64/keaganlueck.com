var output = document.getElementById("output");
var input = document.getElementById("inputFar");
input.addEventListener("input", convert);
function convert() {
  var input = document.getElementById("inputFar").value;
  var outputCels = ((input - 32) * 5) / 9;
  if (isNaN(outputCels) === true) {
    output.textContent = "Please enter a number";
  } else {
    var outputCelsRound = Math.round(10 * outputCels) / 10;
    output.textContent = outputCelsRound + "\u00B0" + " C";
  }
}
