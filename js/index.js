
// document.querySelector(".header-text").style.fontSize = "10rem";

document.querySelector("button").addEventListener("click", assignHouse);

function assignHouse() {

  var houseNum;
  var houseName;
  var houseColors;
  var houseLogoSrc;

  houseNum = Math.floor(Math.random() * 4) + 1;

  if (houseNum == 1) {
      houseName = "Gryffindor";
      houseColorsClass = "gryffindor";
  } else if (houseNum == 2) {
      houseName = "Hufflepuff";
      houseColorsClass = "hufflepuff";
  } else if (houseNum == 3) {
      houseName = "Ravenclaw";
      houseColorsClass = "ravenclaw";
  } else if (houseNum == 4) {
      houseName = "Slytherin";
      houseColorsClass = "slytherin";
  } else {
      houseName = "";
      houseColorsClass = "";
  }

  // alert ("You have been assigned to House " + houseName + "!");

  clearHouseColors();

  applyHouseColors();

  changeHouseLogo();

  document.querySelector("#house-announcement").textContent = ("You have been assigned to House " + houseName + "!");



}

function applyHouseColors() {

  var doc = document.querySelector(".body");
  var btn = document.querySelector("#house-assignment");
  doc.classList.add(houseColorsClass);
  btn.classList.add(houseColorsClass);
}

function clearHouseColors() {

  var doc = document.querySelector(".body");
  var btn = document.querySelector("#house-assignment");

  doc.classList.remove("gryffindor");
  doc.classList.remove("hufflepuff");
  doc.classList.remove("ravenclaw");
  doc.classList.remove("slytherin");

  btn.classList.remove("gryffindor");
  btn.classList.remove("hufflepuff");
  btn.classList.remove("ravenclaw");
  btn.classList.remove("slytherin");

}

function changeHouseLogo() {

  var img = document.querySelector("#house-logo");

  img.src = "img/" + houseColorsClass + "-logo.jpg";

}
