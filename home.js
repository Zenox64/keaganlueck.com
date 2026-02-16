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
  "dji_fly_20260213_144326_263_1771024828875_photo.jpg",
  "100_0375.jpg",
  "100_0359.jpg",
  "100_0285.jpg",
  "100_0340.jpg",
  "100_0224.jpeg",
  "DSC_1382.jpg",
];

let count = 0;

function cycleArray() {
    picture.src = recentPix[count];
    count = (count + 1) % recentPix.length;
}

setInterval(cycleArray, 2000);
