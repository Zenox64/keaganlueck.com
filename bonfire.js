btnTxt = document.getElementById("btnTxt");
addrBtn = document.getElementById("addrBtn");
btnTxt.textContent = "Address: 20713 Ranch Ave, Morgan, MN 56266";

function copyText() {
  btnTxt.fontWeight = "normal";
  btnTxt.fontStyle = "italic";
  btnTxt.textContent = "COPIED";
  navigator.clipboard.writeText("20713 Ranch Ave, Morgan, MN 56266");
}
