"use strict";

const updateBtn = document.querySelector(".js-submit");
const userInput = document.querySelector(".js-input-number");
const message = document.querySelector(".js-message");
const messageCounter = document.querySelector(".js-counter");
let counter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateCounter () {
counter++;
messageCounter.innerHTML = parseInt(counter);
}

const randomNumber = getRandomInt(100);
console.log(randomNumber);

const handleClick = (ev) => {
    ev.preventDefault();
    const userInputValue = parseInt(userInput.value)
    console.log();
if (userInput.value < 0 || userInput.value > 100) {
    message.innerHTML = "El número debe estar entre 1 y 100.";
    return; 
}
   if (userInputValue === randomNumber) {
    message.innerHTML = "Has ganado campeona!!!"
    } else if (userInputValue < randomNumber) {
    message.innerHTML = "Demasiado bajo";
} else {
    message.innerHTML = "Demasiado alto";
}

updateCounter ();
};

updateBtn.addEventListener("click", handleClick);