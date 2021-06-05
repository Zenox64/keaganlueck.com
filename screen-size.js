function getSize() {
  var width = screen.width;
  var height = screen.height;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var pixelRatio = window.devicePixelRatio;
  document.getElementById("width").innerHTML = "Screen Width: " + width;
  document.getElementById("height").innerHTML = "Screen Height: " + height;
  document.getElementById("windowWidth").innerHTML = "Window Width: " + windowWidth;
  document.getElementById("windowHeight").innerHTML = "Window Height: " + windowHeight;
  document.getElementById("pixel-ratio").innerHTML = pixelRatio;
}
