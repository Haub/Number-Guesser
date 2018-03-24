
//Variables
var userGuess = document.querySelector(".userguess");
var displayGuess = document.querySelector('h1');
var displayFeedback = document.querySelector('.toohighorlow');
var randomNum = Math.floor(Math.random() * 100 + 1);

var guessButton = document.querySelector(".guessbutton");
var clearButton = document.querySelector(".clearbutton");
var resetButton = document.querySelector('.resetbutton')

//Event Listeners
userGuess.addEventListener("keyup", function(){
  if (userGuess.value.length > 0) {
    document.querySelector(".clearbutton").disabled = false;  
    document.querySelector(".guessbutton").disabled = false; 
    document.querySelector(".resetbutton").disabled = false;
  } 
})

guessButton.addEventListener("click", function (e){
  e.preventDefault();
  checkGuess();
  comparison();
  document.querySelector(".userguess").value = "";
  document.querySelector(".userguess").focus();
})

resetButton.addEventListener("click", reloadPage);

//Functions


function checkGuess() {
  var userNumber = parseInt(userGuess.value);
  if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
    alert("Please enter a number between 1 and 100")
  } else {
    displayNumber(userNumber);
  }
}

function displayNumber(userNumber) {
  displayGuess.innerText = userNumber
}

function comparison() {
  var guess=parseInt(userGuess.value);
  console.log(randomNum, guess);
  if (randomNum === guess) {
    displayFeedback.innerText = "BOOOMMM!!";
    document.querySelector(".guessbutton").disabled = true;
    document.querySelector(".clearbutton").disabled = true;
  } else if (randomNum > guess) {
    displayFeedback.innerText = "That is too low!"  
  } else if (randomNum < guess) {
    displayFeedback.innerText = "That is too high!"
  }
  else {
    alert("Please enter a number between 1 and 100.")
  }
};

function reloadPage(){
  window.location.reload(true);
}



