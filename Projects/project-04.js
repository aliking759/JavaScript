const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const startButton = document.getElementById("startButton");
const endButton = document.getElementById("endButton");
const userInput = document.getElementById("guessfield");
const guessSlot = document.getElementsByClassName("guesses")[0]; // Use [0] to access the first element
const remaining = document.getElementsByClassName("lastResult")[0]; // Use [0] to access the first element
const lowOrHi = document.getElementsByClassName("lowOrHi")[0]; // Use [0] to access the first element
const startOver = document.getElementsByClassName("resultParas")[0]; // Use [0] to access the first element

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is Too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is Too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}   `;
  numGuesses++;
  remaining.textContent = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
