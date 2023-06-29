/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function newCard() {
  // arrays del contenido que necesitamos en las funciones
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  // función del random card
  //agarrar clases del html
  const cardTopElement = document.querySelector(".top");
  const cardNumberElement = document.querySelector(".number");
  const cardBottomElement = document.querySelector(".bottom");

  //randomize
  const randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  //insertarse en el html
  cardTopElement.innerHTML = randomSymbols;
  cardNumberElement.innerHTML = randomNumbers;
  cardBottomElement.innerHTML = randomSymbols;

  // color rojo (traido desde el css) cuando salen diamantes y corazones
  if (randomSymbols === "♦" || randomSymbols === "♥") {
    cardTopElement.classList.add("red");
    cardNumberElement.classList.add("red");
    cardBottomElement.classList.add("red");
  } else {
    cardTopElement.classList.remove("red");
    cardNumberElement.classList.remove("red");
    cardBottomElement.classList.remove("red");
  }
};
