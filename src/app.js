/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  const cardNumbers = [
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
  const suits = ["Diamonds", "Spades", "Hearts", "Clubs"];
  const suitClasses = suits.map(suit => `suit-${suit.toLowerCase()}`);

  const randomCardNumbers = Math.floor(Math.random() * cardNumbers.length);
  const randomSuitIndex = Math.floor(Math.random() * suits.length);

  document.getElementById("contenidoCarta").innerHTML =
    cardNumbers[randomCardNumbers];
  document.getElementById(
    "theCard"
  ).className = `card ${suitClasses[randomSuitIndex]}`;
};
