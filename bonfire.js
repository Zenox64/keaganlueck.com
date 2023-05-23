function copy() {
  popup.classList.toggle("show");
  triangle.classList.toggle("show");
  navigator.clipboard.writeText("20713 Ranch Ave, Morgan, MN 56266");
  setTimeout(() => {
    popup.classList.remove("show");
    triangle.classList.remove("show");
  }, 3500);
}
