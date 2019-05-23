var guesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
console.log(computerGuess);
document.onkeydown = function(event) {
var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);
}

function showLettersGuessed() {
    var tempStr = guesses.join(", ");
    document.getElementById("guessedLetters").innerHTML = tempStr;
}

function guessMatch (character) {
    console.log(character);
    console.log(computerGuess);
    if (character === computerGuess) {
        wins = wins + 1;
        resetVariables();
        showWins();
    } else if (guessesLeft === 0) {
        losses = losses + 1;
        resetVariables();
        showLosses();
    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

function addLetter (usersKeypress) {
    guesses.push(usersKeypress);
    console.log(guesses);
    showLettersGuessed();
    guessMatch(usersKeypress);
    
}

function showWins() {
    document.getElementById("wins").innerHTML = wins;
}

function showLosses() {
    document.getElementById("losses").innerHTML = losses;
}

function showGuessesRemaining() {
    document.getElementById("guesses").innerHTML = guessesLeft;
}

function resetVariables () {
    guesses = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLosses();
}

startGame();

