"use strict";

let myBody = document.querySelector("Body");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");

function changeToLight() {
  myBody.style.backgroundColor = "white";
  myBody.style.color = "black";
}

function changeToDark() {
  myBody.style.backgroundColor = "black";
  myBody.style.color = "white";
}
