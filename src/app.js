import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generaterandomcard()
};
const generaterandomcard = () => {
  let icon = ["♦", "♥", "♠", "♣"]
  let number = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
  
  let iconIndex = Math.floor(Math.random() * icon.length)
  let numberIndex = Math.floor(Math.random() * number.length)

  let randomIcon = icon[iconIndex]
  let randomNumber = number[numberIndex]


  document.querySelector(".top").innerHTML = randomIcon
  document.querySelector(".number").innerHTML = randomNumber
  document.querySelector(".bottom").innerHTML = randomIcon
}