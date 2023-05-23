btnTxt = document.getElementById("btnTxt");
addrBtn = document.getElementById("addrBtn");
phnTxt = document.getElementById("phone")
btnTxt.textContent = "Address: 20713 Ranch Ave, Morgan, MN 56266";
phnTxt.textContent = "507-430-0823"

function copyText() {
  btnTxt.fontWeight = "normal";
  btnTxt.fontStyle = "italic";
  btnTxt.textContent = "COPIED";
  navigator.clipboard.writeText("20713 Ranch Ave, Morgan, MN 56266");
}

function copyPhone() {
  btnTxt.fontWeight = "normal";
  btnTxt.fontStyle = "italic";
  btnTxt.textContent = "COPIED";
  navigator.clipboard.writeText("5074300823");
}