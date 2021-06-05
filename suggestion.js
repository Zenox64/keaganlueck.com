window.onload = choosePic;
var cycle;
var text = parseInt(document.getElementById("input").value);
var myPix = [
  "'05.JPG",
  "'10.jpeg",
  "'15.JPG",
  "'20.jpeg",
  "DSC_0016.JPG",
  "DSC_0017.JPG",
  "DSC_0041.JPG",
  "DSC_0177.JPG",
  "DSC_0236.JPG",
  "DSC_0338.JPG",
  "DSC_0396.JPG",
  "DSC_0506.JPG",
  "DSC_0524.JPG",
  "DSC_0607.JPG",
  "DSC_0731.JPG",
  "DSC_0764.JPG",
  "DSC_0773.JPG",
  "DSC02863.JPG",
  "IMG_0281.JPG",
  "IMG_0607.JPG",
  "IMG_7665.JPG",
  "IMG_7722.JPG",
  "IMG_8968.JPG",
  "IMG_9047.JPG",
  "IMG_9113.JPG",
  "IMG_9392.JPG",
  "IMG_20160709_155931378.jpg",
  "IMG_20170204_095554188.jpg",
  "gopher-visit.jpeg",
];

var interval;

function changePictures() {
  var techPix = ["gopher-visit.jpeg"];
  var randos = ["'05.JPG"];
  const choice = document.getElementById("picInput").value;
  switch (choice) {
    case "tech":
      myPix = [...techPix];
      break;
    default:
      myPix = [...randos];
  }
  choosePic();
}

function choosePic() {
  clearInterval(interval);
  interval = setInterval(() => {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }, 3000);

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
