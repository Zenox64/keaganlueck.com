/*window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "80px 100px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "0px -200px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}*/
/*window.onscroll(function () {
  if (document.scrollTop() > 50) {
    ("nav").addClass("shrink");
  } else {
    ("nav").removeClass("shrink");
  }
});*/
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
