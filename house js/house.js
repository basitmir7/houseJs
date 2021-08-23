closeDoor = () => {
  var door = document.getElementById("door");
  door.style.transform = "scale(0.96)";
  door.style.transition = "0.5s";
};

openDoor = () => {
  var door = document.getElementById("door");

  door.style.transform = "rotate3d(0, 14, 1, 149deg)";
  door.style.transition = "1s";
};

openWindowsone = () => {
  var win1 = document.getElementById("sheild-1");

  var win2 = document.getElementById("sheild-2");

  win1.style.transform = "rotateY(139deg)";
  win2.style.transform = "rotateY(139deg)";

  win1.style.transition = "1s";
  win2.style.transition = "1s";
};

openWindowstwo = () => {
  var win3 = document.getElementById("sheild-3");

  var win4 = document.getElementById("sheild-4");

  win3.style.transform = "rotateY(139deg)";
  win4.style.transform = "rotateY(139deg)";

  win3.style.transition = "1s";
  win4.style.transition = "1s";
};

closeWindowsone = () => {
  var win1 = document.getElementById("sheild-1");

  var win2 = document.getElementById("sheild-2");

  win1.style.transform = "scale(0.96)";
  win2.style.transform = "scale(0.96)";

  win1.style.transition = "0.5s";
  win2.style.transition = "0.5s";
};

closeWindowstwo = () => {
  var win3 = document.getElementById("sheild-3");

  var win4 = document.getElementById("sheild-4");

  win3.style.transform = "scale(0.96)";
  win4.style.transform = "scale(0.96)";

  win3.style.transition = "0.5s";
  win4.style.transition = "0.5s";
};

Nighthouse = () => {
  var con1 = document.getElementById("moonCont");
  var con2 = document.getElementById("mainCont");
  var con3 = document.getElementById("roof");
  var moon = document.getElementById("Moon");

  var btn = document.getElementById("Btn");

  if (btn.checked == true) {
    con1.style.background = "#151414";
    con2.style.background = "#151414";
    con3.style.background = "#151414";

    moon.style.background = "linear-gradient(58deg, #ffffff, #d1d1d100)";
    moon.style.margin = "0 0 0 19%";

    con1.style.transition = "1s";
    con2.style.transition = "1s";
    con3.style.transition = "1s";
    moon.style.transition = "1s";
  } else {
    con1.style.background = "rgb(131, 255, 249)";
    con2.style.background = "rgb(131, 255, 249)";
    con3.style.background = "rgb(131, 255, 249)";

    moon.style.background =
      "linear-gradient(58deg, rgb(255, 255, 255), rgba(209, 209, 209, 0))";
    moon.style.margin = "0 0 0 10%";
  }
};
