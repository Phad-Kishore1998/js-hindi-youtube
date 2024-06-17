/*
console.log(Math.random()*100) //random generate with dot values
console.log(parseInt(Math.random()*100 + 1)); // proper values from 0 to 100
*/

let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true //for game projects its used mostly

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault() //stopping the submit of the form
        const guess = userInput.value //getting valuea as guess
        console.log(guess);
        validateGuess(guess);
    })
}


//validate if guess is correct
function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Enter validate Number")
    }else if(guess<0 || guess>100){
        alert("Please enter value between 1 to 100")
    }else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was: ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }

}

//printing low or high guess
function checkGuess(guess) {
    if(guess<randomNumber){
        displayMessage("Number is Low")
    }else if(guess>randomNumber){
        displayMessage("Number is High")
    }else if(guess===randomNumber){
        displayMessage("You Gussed it Right!!!!! Party!")
        endGame()
    }
}

//display message 
//all the dom manipulation here.
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//display Guess
function displayGuess(guess) {
    //cleaning values and updating arrays
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `
}

//endGame
function endGame(){
    userInput.value = ''
    //to stop adding move value
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.append(p)
    playGame = false;
    newGame();
}

//newGame
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}