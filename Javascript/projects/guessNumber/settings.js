const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh  = document.querySelector('.lowOrHigh');
const result = document.querySelector('#resultPara')

const button = document.createElement('button');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1 || guess > 100){
        alert('Please enter a number between 1-100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed the right number`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesses.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    button.textContent = `Start New Game`;
    result.appendChild(button);
    playGame = false;
}

