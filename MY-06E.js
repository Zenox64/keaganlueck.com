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
  var yPowerConsumption =
    document.getElementById("electricityInputPrice").value * 62833;
  var yBuyPrice = 52990;
  var change = 1000;
  var yTires = change * amount;
  var tire = yTires.toLocaleString();
  moyTires.textContent = "$" + tire;
  var modelY = yPowerConsumption + yBuyPrice + yTires;
  var mY = modelY.toLocaleString();
  modely.textContent = "$" + mY;
}
//modely
document.getElementById("carName").href = "21-my.png";
document.getElementById("m3Button").style.display = "none";

var modelYkwhUsage = (document.getElementById("kwhUsage").value = 62883);
var modelYkwhUsageConv = modelYkwhUsage.toLocaleString();

var yBuyPrice = document.getElementById("modelYBuyPrice").value * 1;
var yBuyPriceConv = yBuyPrice.toLocaleString();
modelYBuyPrice.textContent = "$" + yBuyPriceConv;

var yTires = document.getElementById("input").value * 1000;
var yTiresConv = yTires.toLocaleString();
var electricityCost =
  document.getElementById("electricityInputPrice").value *
  document.getElementById("kwhUsage").value;
var modelYTotalCost = yBuyPrice + yTires + electricityCost;
document.getElementById("kwhUsage").textContent = modelYkwhUsageConv;
modelYTotalCostConv = modelYTotalCost.toLocaleString();
modely.textContent = "$" + modelYTotalCostConv;
electricityCostConv = electricityCost.toLocaleString();
mYPricePer.textContent = "$" + electricityCostConv;
moyTires.textContent = "$" + yTiresConv;

var i = 1;
function modelYTaxBreak() {
  var yPowerConsumption =
    document.getElementById("electricityInputPrice").value *
    document.getElementById("kwhUsage").value;
  var text = document.getElementById("kwhUsage").value;
  var yBuyPrice = document.getElementById("modelYBuyPrice").value * 1;
  var tireValue = document.getElementById("input").value;
  var yTires = tireValue * 1000;
  i++;
  //below if there is a remainder of zero it will run, this is a note to self
  //for future reference
  if (i % 2 == 0) {
    taxBreak.innerHTML = "calculate without 5k tax credit";
    var modelY = yPowerConsumption + yBuyPrice + yTires - 5000;
    var mY = modelY.toLocaleString();
    modely.textContent = "$" + mY;
    document.getElementById("taxBreak").style.background = "#00527E";
    document.getElementById("taxBreak").style.color = "white";
    document.getElementById("taxBreak").style.fontWeight = "500";
    console.log(yPowerConsumption, yBuyPrice, yTires);
    console.log(document.getElementById("electricityInputPrice").value);
     console.log((document.getElementById("kwhUsage").value));
  } else {
    taxBreak.innerHTML = "calculate with 5k tax credit";
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

/*
function displayNone() {
document.getElementById("colorWhite").style.display = "none";
document.getElementById("colorRed").style.display = "none";
}
displayNone();*/
function goBack() {
  window.history.back();
}
function vehicleRight() {
  document.getElementById("m3Button").style.display = "inline-block";
  document.getElementById("mYButton").style.display = "none";
  document.getElementById("carName").href = "21-m3.png";
  document.getElementById("rightCar").src = "21-m3.png";
  var carNameOutput = document.getElementById("carName");
  var upMostHeaderOutput = document.getElementById("upmostHeader");
  carNameOutput.textContent = "2021 Tesla Model 3 Long Range";
  upMostHeaderOutput.textContent =
    "2021 Tesla Model 3 vs 2006 Ford Expedition at 250,000 Miles";
  /*document.getElementById("colorWhite").style.display = "inline-block";
    document.getElementById("colorRed").style.display = "inline-block";*/
  var model3kwhUsage = document.getElementById("kwhUsage").value =
    58140 * document.getElementById("electricityInputPrice").value;
  var model3kwhUsageConv = model3kwhUsage.toLocaleString();
  mYPricePer.textContent = "$" + model3kwhUsageConv;

  model3BuyPrice = document.getElementById("modelYBuyPrice").value = 48990;
  model3BuyPriceConv = model3BuyPrice.toLocaleString();
  document.getElementById("modelYBuyPrice").textContent =
    "$" + model3BuyPriceConv;
  
    var kwhUsageOutput = document.getElementById("kwhUsage").value = 58140;
  var kwhUsageOutputConv = kwhUsageOutput.toLocaleString();
  document.getElementById("kwhUsage").textContent = kwhUsageOutputConv;

  var yTires = document.getElementById("input").value * 1000;
  var yTiresConv = yTires.toLocaleString();
  moyTires.textContent = "$" + yTiresConv;

  var electricityCost =
    document.getElementById("electricityInputPrice").value * kwhUsageOutput;
  var modelYTotalCost = model3BuyPrice + yTires + electricityCost;

  model3TotalCostConv = modelYTotalCost.toLocaleString();
  modely.textContent = "$" + model3TotalCostConv;

  //default button
  taxBreak.innerHTML = "calculate with 5k tax credit";
  document.getElementById("taxBreak").style.background = "transparent";
  document.getElementById("taxBreak").style.color = "#00527E";
  document.getElementById("taxBreak").style.fontWeight = "bolder";
  model3TotalCostConv = modelYTotalCost.toLocaleString();
  modely.textContent = "$" + model3TotalCostConv;
}
function vehicleLeft() {
  document.getElementById("mYButton").style.display = "inline-block";
  document.getElementById("m3Button").style.display = "none";
  document.getElementById("carName").href = "21-my.png";
  document.getElementById("rightCar").src = "21-my.png";
  var carNameOutput = document.getElementById("carName");
  var upMostHeaderOutput = document.getElementById("upmostHeader");
  carNameOutput.textContent = "2021 Tesla Model Y Long Range";
  upMostHeaderOutput.textContent =
    "2021 Tesla Model Y vs 2006 Ford Expedition at 250,000 Miles";
  /*document.getElementById("colorWhite").style.display = "none";
    document.getElementById("colorRed").style.display = "none";*/

  var modelYkwhUsage = document.getElementById("kwhUsage").value =
    62883 * document.getElementById("electricityInputPrice").value;
  var modelYkwhUsageConv = modelYkwhUsage.toLocaleString();
  mYPricePer.textContent = "$" + modelYkwhUsageConv;

  modelYBuyPrice = document.getElementById("modelYBuyPrice").value = 52990;
  modelYBuyPriceConv = modelYBuyPrice.toLocaleString();
  document.getElementById("modelYBuyPrice").textContent =
    "$" + modelYBuyPriceConv;

  //buy price change
  model3BuyPrice = 52990;
  model3BuyPriceConv = model3BuyPrice.toLocaleString();
  document.getElementById("modelYBuyPrice").textContent =
    "$" + model3BuyPriceConv;

  var yTires = document.getElementById("input").value * 1000;
  var yTiresConv = yTires.toLocaleString();
  moyTires.textContent = "$" + yTiresConv;

  var electricityCost =
    document.getElementById("electricityInputPrice").value * 62883;
  var modelYTotalCost = modelYBuyPrice + yTires + electricityCost;

  document.getElementById("kwhUsage").value = 62883;

  taxBreak.innerHTML = "calculate with 5k tax credit";
  document.getElementById("taxBreak").style.background = "transparent";
  document.getElementById("taxBreak").style.color = "#00527E";
  document.getElementById("taxBreak").style.fontWeight = "bolder";
  model3TotalCostConv = modelYTotalCost.toLocaleString();
  modely.textContent = "$" + model3TotalCostConv;
  console.log(model3BuyPrice, electricityCost, yTires, modelYkwhUsage);
}
function colorToWhite() {
  document.getElementById("rightCar").src = "21-m3(white).png";
}
function colorToRed() {
  document.getElementById("rightCar").src = "21-m3.png";
}
function mYdynamicPricePerKWH() {
  //getting all the other variables
  var yBuyPrice = document.getElementById("modelYBuyPrice").value * 1;
  var yTires = document.getElementById("input").value * 1000;
  var electricityCost =
    document.getElementById("electricityInputPrice").value * 62883;
  console.log(electricityCost);
  var modelYTotalCost = 52990 + yTires + electricityCost;

  modelYTotalCostConv = modelYTotalCost.toLocaleString();
  modely.textContent = "$" + modelYTotalCostConv;
  electricityCostConv = electricityCost.toLocaleString();
  mYPricePer.textContent = "$" + electricityCostConv;
}
function m3dynamicPricePerKWH() {
  //getting all the other variables
  var yBuyPrice = document.getElementById("modelYBuyPrice").value * 1;
  var yTires = document.getElementById("input").value * 1000;
  var electricityCost =
    document.getElementById("electricityInputPrice").value * 58140;
  console.log(electricityCost);
  var modelYTotalCost = 48990 + yTires + electricityCost;

  modelYTotalCostConv = modelYTotalCost.toLocaleString();
  modely.textContent = "$" + modelYTotalCostConv;
  electricityCostConv = electricityCost.toLocaleString();
  mYPricePer.textContent = "$" + electricityCostConv;
}
