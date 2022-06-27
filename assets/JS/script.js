var wordBlank = document.querySelector("#blank-word");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

var selectWord = "";
var numBlanks = 0;
var winCount = 0;
var loseCount = 0;
var hasWon = false; 
var timer;
var timeCount;


function startGame() {
    hasWon = false;
    timerCount = 15;
    
}

function winGame() {
    wordBlank.textContent = "YOU WON!";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCount++
    startButton.disabled = false;
    setLosses()
  }
  
  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  