//expedition
var eGasUsage = document.getElementById("gasInputPrice").value * 19230;
var eBuyPrice = 8000;
var eTires = document.getElementById("input").value * 800;
var eOil = document.getElementById("oilInput").value * 50;
var exped = eGasUsage + eBuyPrice + eTires + eOil;
var expeditionConv = exped.toLocaleString();
var tires = eTires.toLocaleString();
expeTires.textContent = "$" + tires;
expedition.textContent = "$" + expeditionConv;
function expeditionTires() {
  var eGasUsage = document.getElementById("gasInputPrice").value * 19230;
  var eBuyPrice = 8000;
  var tireChange = 800;
  var amount = document.getElementById("input").value;
  var eTires = tireChange * amount;
  var eOil = document.getElementById("oilInput").value * 50;
  var tires = eTires.toLocaleString();
  expeTires.textContent = "$" + tires;
  var exped = eGasUsage + eBuyPrice + eTires + eOil;
  var expeditionConv = exped.toLocaleString();
  expedition.textContent = "$" + expeditionConv;
  //model y tires
  var yPowerConsumption = 8333.28;
  var yBuyPrice = 50000;
  var change = 1000;
  var yTires = change * amount;
  var tire = yTires.toLocaleString();
  moyTires.textContent = "$" + tire;
  var modelY = yPowerConsumption + yBuyPrice + yTires;
  var mY = modelY.toLocaleString();
  modely.textContent = "$" + mY;
}
//modely
var amount = document.getElementById("input").value;

var yPowerConsumption = 8333.28;
var yBuyPrice = 50000;
var change = 1000;
var yTires = change * amount;
var tire = yTires.toLocaleString();
moyTires.textContent = "$" + tire;
var modelY = yPowerConsumption + yBuyPrice + yTires;
var mY = modelY.toLocaleString();
modely.textContent = "$" + mY;

var i = 1;
function modelYTaxBreak() {
  var yPowerConsumption = 8333.28;
  var yBuyPrice = 50000;
  i++;
  //below if there is a remainder of zero it will run, this is a note to self
  //for future reference
  if (i % 2 == 0) {
    var tireValue = document.getElementById("input").value;
    var yTires = tireValue * 1000;
    taxBreak.innerHTML = "calculate without 5k tax credit";
    var modelY = yPowerConsumption + yBuyPrice + yTires - 5000;
    var mY = modelY.toLocaleString();
    modely.textContent = "$" + mY;
    document.getElementById("taxBreak").style.background = "#00527E";
    document.getElementById("taxBreak").style.color = "white";
    document.getElementById("taxBreak").style.fontWeight = "500";
    //console.log(yTires);
  } else {
    taxBreak.innerHTML = "calculate with 5k tax credit";
    var tireValue = document.getElementById("input").value;
    var yTires = tireValue * 1000;
    var modelY = yPowerConsumption + yBuyPrice + yTires;
    var mY = modelY.toLocaleString();
    modely.textContent = "$" + mY;
    document.getElementById("taxBreak").style.background = "transparent";
    document.getElementById("taxBreak").style.color = "#00527E";
    document.getElementById("taxBreak").style.fontWeight = "bolder";
  }
  //console.log(i);
}
//oil changes
function oilChange() {
  var totalCost = document.getElementById("oilInput").value * 50;
  var totalCostConv = totalCost.toLocaleString();
  oilPrice.textContent = "$" + totalCostConv;
  console.log(totalCost);
  var exped = eGasUsage + eBuyPrice + eTires + totalCost;
  var expedI = exped.toLocaleString();
  expedition.textContent = "$" + expedI;
}
var totalCost = document.getElementById("oilInput").value * 50;
var totalCostConv = totalCost.toLocaleString();
oilPrice.textContent = "$" + totalCostConv;
//default gas price below
var gasPriceInputted = document.getElementById("gasInputPrice").value;
var gasPrice = gasPriceInputted * 19230;
var gasPriceConv = gasPrice.toLocaleString();
gasPriceOutput.textContent = "$" + gasPriceConv;
function dynamicGasPrice() {
  var buyPrice = document.getElementById("buyPrice").value;
  var buyPriceNum = parseInt(buyPrice);
  var gasPriceInputted = document.getElementById("gasInputPrice").value;
  var gasPrice = gasPriceInputted * 19230;
  var tirePrice = document.getElementById("input").value * 800;
  var oilPrice = document.getElementById("oilInput").value * 50;
  var totalCost = tirePrice + oilPrice + buyPriceNum + gasPrice;
  var totalCostConv = totalCost.toLocaleString();
  expedition.textContent = "$" + totalCostConv;

  var gasPriceConvNum = parseFloat(gasPrice);
  var gasPriceConv = gasPriceConvNum.toLocaleString();
  gasPriceOutput.textContent = "$" + gasPriceConv;

  /*console.log(tirePrice);
  console.log(gasPriceConvNum);
  console.log(oilPrice);
  console.log(buyPriceNum);*/
}
var electricityCost =
  document.getElementById("electrictyInputPrice").value * 69444;
  var electricityCostConv = electricityCost.toLocaleString();
mYPricePer.textContent = '$' + electricityCostConv;
console.log(electricityCostConv      )
function dynamicPricePerKWH() {
  alert(electricityCost);
}

function goBack() {
  window.history.back();
}