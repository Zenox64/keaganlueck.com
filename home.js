// image popup on name hover
var popup1 = document.getElementById("popup1");
var triangle1 = document.getElementById("triangle1");
function copy1() {
  window.open("https://www.luecktree.com/");
}
function showImg() {
  document.getElementById("hiddenImg").style.display = "inline-block";
}
function hideImg() {
  document.getElementById("hiddenImg").style.display = "none";
}
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
