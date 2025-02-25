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
  "IMG_0652.jpeg",
  "IMG_0641.jpeg",
  "wolves-w(92-100).jpg",
  "wolves-hawks'25.jpg",
  "IMG_5533.jpg",
  "4ACF1380-91BD-401C-BB78-1C44054D7AB7.jpg",
  "28051419-1ACF-484E-AA0C-68623A2745F5.jpg",
  "243E739E-7628-41FD-A207-69C21E179532.jpg",
  "DSC_0805.jpg",
  "DSC_0789.jpg",
  "DSCF0132.jpg",
  "DSCF0145.jpg"
];

let count = 0;

function cycleArray() {
    picture.src = recentPix[count];
    count = (count + 1) % recentPix.length;
}

setInterval(cycleArray, 3000);
