btnTxt = document.getElementById("btnTxt");
addrBtn = document.getElementById("addrBtn");
phnTxt = document.getElementById("phone")
lnkTxt = document.getElementById("link")
btnTxt.textContent = "Address: 20713 Ranch Ave, Morgan, MN 56266";
phnTxt.textContent = "507-430-0823"
lnkTxt.textContent = "Share Link"

function copyText() {
  btnTxt.fontWeight = "normal";
  btnTxt.fontStyle = "italic";
  btnTxt.textContent = "COPIED";
  navigator.clipboard.writeText("20713 Ranch Ave, Morgan, MN 56266");
}

function copyPhone() {
  phnTxt.fontWeight = "normal";
  btnTxt.fontStyle = "italic";
  phnTxt.textContent = "COPIED";
  navigator.clipboard.writeText("5074300823");
}

function copyLink() {
  lnkTxt.fontWeight = "normal";
  lnkTxt.fontStyle = "italic";
  lnkTxt.textContent = "Link copied";
  navigator.clipboard.writeText("www.keaganlueck.com/bonfire.html");
}

alert("Share this link with all of your friends")