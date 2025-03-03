import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// function
window.onload = function() {
  generaterandomcard()
  document.querySelector("#randomcardBtn").addEventListener("click", generaterandomcard)
};

// random card generator
const generaterandomcard = () => {
  const iconDiv = document.querySelector(".bottom",)
  const icondiv = document.querySelector(".top",)
  
  let icon = ["♦", "♥", "♠", "♣"]
  let number = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
  
  let iconIndex = Math.floor(Math.random() * icon.length)
  let numberIndex = Math.floor(Math.random() * number.length)

  let randomIcon = icon[iconIndex]
  let randomNumber = number[numberIndex]

  // code for bottom icon
  if(randomIcon == "♦") {
    iconDiv.style.color = "red"
  }
  else if(randomIcon == "♥") {
    iconDiv.style.color = "red"
  }
  else if(randomIcon == "♣") {
    iconDiv.style.color = "black"
  }
  else if(randomIcon == "♠") {
    iconDiv.style.color = "black"
  }
// Code for top icon
  if(randomIcon == "♦") {
    icondiv.style.color = "red"
  }
  else if(randomIcon == "♥") {
    icondiv.style.color = "red"
  }
  else if(randomIcon == "♣") {
    icondiv.style.color = "black"
  }
  else if(randomIcon == "♠") {
    icondiv.style.color = "black"
  }


  document.querySelector(".top").innerHTML = randomIcon
  document.querySelector(".number").innerHTML = randomNumber
  document.querySelector(".bottom").innerHTML = randomIcon
  
}