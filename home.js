/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//initial greeting 
var today = new Date();
var hourNow = today.getHours();
var greeting;
console.log(hourNow);
if (hourNow > 18) {
  greeting = "GOOD EVENING!";
} else if (hourNow > 12) {
  greeting = "GOOD AFTERNOON!";
} else if (hourNow > 0) {
  greeting = "GOOD MORNING!";
} else {
  greeting = "Welcome!";
}
header.textContent = greeting;

var picture = document.getElementById('myPicture');
const recentPix = [
  "IMG_0938.jpg",
  "IMG_0931.jpg",
  "IMG_0883.jpg",
  "IMG_0903.jpg",
  "IMG_1442.jpg",
  "DSC_0850.jpg"
];

let count = 0;

function cycleArray() {
    picture.src = recentPix[count];
    count = (count + 1) % recentPix.length;
}

setInterval(cycleArray, 2000);
