const jr = document.getElementById("jr");
const allClasses = [
  "lr-me",
  "sr-me",
  "p-me",
  "lr-mS",
  "p-mS",
  "pp-mS",
  "lr-mX",
  "p-mX",
  "lr-mY",
  "p-mY",
  "sm-ct",
  "semi",
  "sneak"
];
function pressed(e) {
  e.preventDefault(e); // Prevents default action (redirect) when the form is submitted
  var text = document.getElementById("jr").value;
  var output = document.getElementById("output");
  if (text === "text blue") {
    document.getElementById("header").style.color = "blue";
    console.log("You changed the text color to blue");
  } else if (text === "text red") {
    document.getElementById("header").style.color = "red";
    console.log("You just changed the text color to red");
  } else if (text === "text yellow") {
    document.getElementById("header").style.color = "yellow";
    console.log("You just changed the text color to yellow");
  } else if (text === "background blue") {
    document.getElementById("li").style.backgroundImage = "";
    document.getElementById("li").style.backgroundColor = "blue";
    console.log("You just changed the background color to blue");
  } else if (text === "background red") {
    document.getElementById("li").style.backgroundImage = "";
    document.getElementById("li").style.backgroundColor = "red";
    console.log("You just changed the background color to red");
  } else if (text === "background yellow") {
    document.getElementById("li").style.backgroundImage = "";
    document.getElementById("li").style.backgroundColor = "yellow";
    console.log("You just changed the background color to yellow");
  } else if (text === "tesla font") {
    document.getElementById("header").style.fontFamily = "Tesla";
    //fam bdays
  } else if (text === "weMenu71") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Jul 15, 2005 10:03:00");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), 15, 10, 3);
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));

    header.textContent =
      "Welcome back sir, how may I assist you? Days until bday - " + day;

    document.getElementById("li").style.backgroundImage =
      "url('new weMenu gif.gif')";
    document.getElementById("li").style.backgroundSize = "cover";
    document.getElementById("li").style.backgroundRepeat = "no-repeat";
    //document.getElementById("header").style.color = "white";
    header.style.color = "white";
    console.log("You just unlocked Keagan's preset");
    console.log(
      "This number is the number of characters you typed calculated by the text.length property! " +
        text.length
    );
  } else if (text === "Kendra") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Jan 28, 2011");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));
    header.textContent = "Welcome Kendra! Days until birthday - " + day;
    document.getElementById("li").style.backgroundColor = "#C49E9E";
    document.getElementById("header").style.color = "#fff";
    document.getElementById("li").style.backgroundImage = "";
  } else if (text === "Josh") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Aug 24, 1980");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), 15, 10, 3);
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));
    header.textContent = "Welcome Josh! Days until birthday - " + day;
    document.getElementById("li").style.backgroundColor = "#4713D1";
    document.getElementById("header").style.color = "#E25B12";
    document.getElementById("li").style.backgroundImage = "";
  } else if (text === "Jolene") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Jan 14, 1981");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), 15, 10, 3);
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));
    header.textContent = "Welcome Jolene! Days until birthday - " + day;
    document.getElementById("li").style.backgroundColor = "#0577A9";
    document.getElementById("header").style.color = "#22B6C5";
    document.getElementById("li").style.backgroundImage = "";
  } else if (text === "kya") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Nov 21, 2014");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), 15, 10, 3);
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));
    header.textContent = "Welcome Kya! Days until birthday - " + day;
    document.getElementById("li").style.backgroundColor = "#66008C";
    document.getElementById("header").style.color = "#38C7A6";
    document.getElementById("li").style.backgroundImage = "";
  } else if (text === "Kalisia") {
    tesla.innerHTML = "";
    let now = new Date();
    let bday = new Date("Dec 8, 2017");
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), 15, 10, 3);
    if (now > nextBday) {
      nextBday.setFullYear(now.getFullYear() + 1);
    }

    let whenNextBday = nextBday.getTime() - now.getTime();
    let timeAlive = now.getTime() - bday.getTime();

    let day = Math.floor(whenNextBday / (1000 * 60 * 60 * 24));
    let daysAlive = Math.floor(timeAlive / (1000 * 60 * 60 * 24));
    header.textContent = "Welcome Kalisia! Days until birthday - " + day;
    document.getElementById("li").style.backgroundColor = "#720000";
    document.getElementById("header").style.color = "#0FB819";
    document.getElementById("li").style.backgroundImage = "";
    //birthdays end
    // model 3s
  } else if (text === "standard range model 3") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("sr-me");
    tesla.textContent = "2021 Standard Range+ Model 3";
    header.innerHTML =
      "18' aero wheels <br /> Rear Wheel Drive <br />5.3s 0-60<br /> 140mph top speed<br /> 263mi range <br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self Driving Capability</span>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "long range model 3") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("lr-me");
    //document.getElementById("li").style.backgroundImage = "url('sexy.jpg')";
    tesla.textContent = "2021 Long Range Model 3";
    header.innerHTML =
      "18' aero wheels <br /> Dual Motor AWD<br /> 4.2s 0-60 <br /> 3.7s 0-60 with acceleration boost<br />145mph top speed<br /> 353mi range<br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /> <span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self Driving Capabilities</span>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "performance model 3") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("p-me");
    document.getElementById("li").style.backgroundRepeat = "no-repeat";
    tesla.innerHTML = "2021 Peformance Model 3 <br />";
    header.innerHTML =
      "20' Uberturbine Wheels <br />Performance Breaks<br />Better Rear Motor than other 3's<br />Track Mode<br />Carbon Fiber Spoiler<br />Lowered Suspension<br />Aluminum Alloy Pedals<br />Track Mode<br />Dual Motor All-Wheel Drive<br /> 3.1s 0-60<br />162mph top speed<br /> 315mi range <br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'> Full Self Driving Capabilities</span>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
    //model S
  } else if (text === "long range model s") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("lr-mS");
    tesla.innerHTML = "2021Long Range Model S <br />";
    header.innerHTML =
      "19' Tempest Wheels<br /> Dual Motor AWD<br />3.1s 0-60<br /> 155mph top speed<br /> 412mi range<br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003 </span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self Driving Capabilities</span><br />Yoke Steering &#10003";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "plaid model s") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("p-mS");
    tesla.innerHTML =
      "<span title='only thing beyond ludicrous is plaid'>2021Plaid Model S</span><br />";
    header.innerHTML =
      "21' Arachnid Wheels <br />Tri Motor AWD<br />1.99s 0-60 with Plaid Mode<br /> 200mph top speed<br /> 390mi range <br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003<span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'> Full Self Driving Capabilities</span><br />Yoke Steering &#10003<br /><br /><u>Plaid Upgrades</u><ul><li>Quickest accerating car in production today</li><li>1/4 mile: 9.23@155mph trap speed</li><li>1,020 horsepower</li><li>Carbon Sleeved Rotors</li><li>Torque Vectoring</li>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.color = "red";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "plaid+ model s") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("pp-mS");
    tesla.innerHTML =
      "<span title='Only thing beyond Ludicrous is Plaid and the only thing beyond Plaid is Plaid+ lol'>2021Plaid+ Model S</span><br />";
    header.innerHTML =
      "21' Arachnid Wheels<br />Tri-Motor AWD<br />200mph top speed<br />520+ mile range<br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self Driving Capabilites</span><br /><br /><u>Plaid+ Upgrades</u><ul><li>Quickest 0-60 and 1/4 mile acceleration of any production car <i>ever</i></li><li>0-60 mph: <1.99s</li><li>1/4 mile: <9.0s</li><li>1,100+ horsepower</li><li><i>Three</i> high performance motors</li><li>Carbon-sleeved rotors</li><li>Torque vectoring</li><br />Yoke Steering &#10003";
    document.getElementById("tesla").style.color = "red";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
    //model x
  } else if (text === "long range model x") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("lr-mX");
    tesla.innerHTML = "Long Range Model X";
    header.innerHTML =
      "20' Cyberstream Wheels<br />Dual Motor AWD<br />3.8s 0-60<br />155mph top speed<br />360mi range <br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003<span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'> Full Self Driving Capabilities</span><br />Falcon Wing Doors<br /><span title='Included: Five Seat Interior. $6,500 Six Seat Interior, all captains seats. $3,500 Seven Seat Interior.'>Seating Options</span><br />Fastest SUV in the World &#10003<br />Yoke Steering &#10003";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "plaid model x") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("p-mX");
    tesla.innerHTML = "Plaid Model X";
    header.innerHTML =
      "22' Turbine Wheels<br />Tri Motor AWD<br />340mi range<br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003<span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'> Full Self Driving Capabilities</span><br />Falcon Wing Doors<br /><span title='Included: Five Seat Interior. $6,500 Six Seat Interior, all captains seats. $3,500 Seven Seat Interior.'>Seating Options</span><br /> Fastest SUV in the World &#10003<br />Yoke Steering &#10003<br /><br /><u>Plaid Upgrades</u><ul><li>Quickest Accleration SUV in production today</li><li>0-60 mph: 2.s</li><li>1/4 mile: 9.9s</li><li>1,020 horsepower</li><li><i>Three</i> High Performance Motors</li><li>Carbon-sleeved rotors</li><li>Torque vectoring</li>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
    //model y
  } else if (text === "long range model y") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("lr-mY");
    tesla.innerHTML = "2021 Long Range Model Y";
    header.innerHTML =
      "19' Gemini Wheels<br /> Dual Motor AWD<br />4.8s 0-60<br /> 4.3s 0-60 with acceleration boost<br />135mph top speed<br /> 326mi range<br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self-Driving Capabilities</span>   ";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "performance model y") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("p-mY");
    tesla.innerHTML = "2021 Performance Model Y";
    header.innerHTML =
      "21' Uberturbine Wheels<br />Performance Breaks<br />Lowered Suspension<br />Aluminum Alloy Pedals<br />Dual Motor AWD<br />3.5s 0-60<br />155 mph top speed<br />303mi range <br /><span title='Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.'>Autopilot Included &#10003</span><br /><span title='Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars. Auto Lane Change: automatic lane changes while driving on the highway. Autopark: both parallel and perpendicular spaces. Summon: your parked car will come find you anywhere in a parking lot. Really. Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.'>Full Self-Driving Capabilities</span>";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
    //cybertruck
  } else if (text === "single motor cybertruck") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("sm-ct");
    tesla.innerHTML = "Single Motor Cybertruck";
    header.innerHTML =
      "Single Motor RWD <br /> <6.5s 0-60<br /> 7,500+lbs Towing Capacity";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
    document.getElementById("tesla").style.color = "red";
    document.getElementById("header").style.color = "red";
    document.getElementById("button").style.color = "red";
    document.getElementById("hide").style.backgroundColor = "transparent";
    document.getElementById("hide").style.color = "red";
    //semi
  } else if (text === "semi") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("semi");
    tesla.innerHTML = "Tesla Semi";
    header.innerHTML =
      "Four Independent Motors<br />20s 0-60 with 80,000lb load<br /><span title='The drag Coefficient of the 2 million dollar Bugatti Chiron that is known for being aerodynamic is 0.38'>0.36 Drag Coefficient</span><br />300 and 500 mile range options<br /> Center Pilots Seat";
    document.getElementById("header").style.color = "black";
    document.getElementById("tesla").style.fontFamily = "Tesla";
  } else if (text === "dream setup") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("background-images");
    document.getElementById("li").style.backgroundImage = "url('')";
    tesla.innerHTML = "";
    header.innerHTML = "<center><u>Dream Setup<u></center>";
    jr.style.display = "none";
    hide.style.display = "none";
    window.location.replace((url = "dream setup.html"));
  } else if (text === "help") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("background-images");
    document.getElementById("header").style.font = "Roboto";
    document.getElementById("li").style.backgroundImage = "url('')";
    tesla.innerHTML = "Active Queries";
    header.innerHTML =
      '"background" + (primary color of your choice)<br />"text" + (primary color of your choice)<br />"Josh"<br />"Jolene"<br />"Kendra"<br />"kya"<br />"Kalisia"<br />"standard range (tesla model of your choice) example-> "standard range model 3"<br />"long range (tesla model of your choice)<br />"performance" (tesla model of your choice)<br />"plaid (tesla model of your choice)"<br />"plaid+ model s"<br />"single motor cybertruck"<br />"semi"<br />"tesla font"<br />text delete';
    document.getElementById("header").style.color = "black";
  } else if (text === "tesla notes") {
    var bgImg = document.querySelector("#li");
    bgImg.classList.add("background-images");
    document.getElementById("li").style.backgroundImage = "url('')";
    tesla.innerHTML = "";
    header.innerHTML = "";
    jr.style.display = "none";
    hide.style.display = "none";
    window.location.replace((url = "tesla notes.html"));
  } else if (text === "science notes") {
    window.location.replace((url = "particle theory test review.html"));
  } else if (text === "test") {
    var img = "url('semi.png')";
    img.addClass("test");
  } else if (text === "basketball highlights") {
    window.location.replace();
  } else if (text === "confetti") {
    document.getElementById("li").style.backgroundImage = "url('confetti.gif')";
    tesla.innerHTML = "";
    header.innerHTML = "";
    jr.style.display = "none";
  } else if (text === "text delete") {
    tesla.innerHTML = "";
    header.innerHTML = "";
    document.getElementById("hide").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("footer").style.display = "none";
  } else {
    document.getElementById("header").style.color = "transparent";
    tesla.innerHTML = "";
    header.innerHTML = greeting;
    document.getElementById("li").style.backgroundColor = "white";
    document.getElementById("header").style.color = "black";
    console.log("You just reset the page to default");
    document.getElementById("header").style.fontFamily = "";
    document.getElementById("button").style.backgroundColor = "";
    document.getElementById("button").style.color = "blue";
    document.getElementById("hide").style.backgroundColor = "blue";
    document.getElementById("hide").style.color = "green";
    document.getElementById("hide").style.display = "inline-block";
    document.getElementById("button").style.display = "inline-block";
    document.getElementById("footer").style.display = "inline-block";
  }
  jr.value = "";
}

var now = new Date();
let keaganbday = new Date("July 15");
console.log(now);

if (
  now.getMonth() === keaganbday.getMonth() &&
  now.getDate() === keaganbday.getDate()
) {
  console.log(now);
  document.body.classList.add("keagan-bday-background");
}
jr.addEventListener("keypress", function (e) {
  const key = e.keyCode || e.which;

  if (key === 13) {
    pressed(e);
  }
});
window.onload = function () {
  document.getElementById("jr").focus();
};
var today = new Date();
var hourNow = today.getHours();
var greeting;
console.log(hourNow);
if (hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}
header.innerHTML = greeting;
//how to do the same thing with a switch below
/* switch (text) {
             case red: 
             document.getElementById("header").style.colr = "red";
             } */

/*
        var str = "Hello ";
        var str1 = "World, this page is basically my JS testing zone.";
        console.log(str + str1);
        console.warn("You really shouldn't be seeing this");
        var keagan = "If you are seeing this you are either really lucky or really smart";
        console.log(keagan);
        var date = "Today is 11-10-20 and I am working on writing my firs code with JavaScript it is really fun!";
        var datee = "I am getting to a point where I am realizing there is endless possibilites."
        var dateee = " I am glad I am writing this code because implementing the code makes it "
        var dateeee = "a lot easier to learn it. I am using freeCodeCamp as one of my main resources in learning vanillaJS."
        var btw = "Btw this paragraph is made up of 5 variables!"
        console.log(date + datee + dateee + dateeee + btw);
        var warn = "This page is a lot different than most webpages nowadays why you may ask, "
        var warn1 = " it is because this page loads fast af and is super light weight";
        var file = ". This file is literally 4KB."
        console.log(warn + warn1 + file);
        var functionWithArgs;
        console.warn("I was going to try to call a function here but I had some issues. You know how that goes.");
        var daddy = "Today the date is 11-24-20, I learned to use git in a terminal today, "
        var P = "well just the basics at least. It is fun using git a terminal. Makes me "
        var pup = "feel like I am a smart, lol."
        console.log(daddy + P + pup);
        let keg = "11-27-20 - Today I set up this security camera with an old iPod touch 5th gen"
        let reg = ". What I did was cut a whole in the ceiling panel small enough so it is barely noticable. I ran a 100ft extension cord "
        let beg = "through the ceiling from the outlet by our freezer through the wood room and to where I had the iPod setup. The reason I had to "
        let egg = "run an extension cord is so the iPod can always have power. I just ran some ethernet through our house for my dad's office so I knew what to expect."
        let teg = " I did all this without anyone knowing except Kendra who I told. It is awesome and I watch the feed through my old iPad. Life is good."
        console.log(keg + reg + beg + egg + teg);
        let bit = "11-29-20 - Bitcoin has been pretty crazy this month, it managed to get to 19K but and then a view days ago people started selling but now it is back ";
        let coin = "at 18.5K. It could be interesting if it sets a new record high. We were gonna configure a sonicwall tz300 today but this model doesn't have wifi.";
        console.log(bit + coin);
        let crypto = "12-16-20_Bitcoin broke the record high today and is continuing to shoot up hundreds at a time. It is up 2k just today!"
        console.log(crypto);
        */
const more =
  "images are sticking after you return to the main page. The background";
const evenMore = "may not change. Refresh and you should be good.";
function alertTest() {
  alert(
    'Welcome to my site! Type "help" for help. Currently the background ' +
      more +
      evenMore
  );
}
alertTest();
