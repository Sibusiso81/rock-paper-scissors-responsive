/* Define variabels */
const elementValue = localStorage.getItem("playerNameValue");
console.log(elementValue);
/* Get buttons */
const choiceBtns = document.querySelectorAll("#moveBtn");
const saveBtn = document.getElementById("saveBtn");
/* Game section */
const gameSection = document.querySelector(".game-section");
const showPlayerScore = document.getElementById("playerScore");
const showComputerScore = document.getElementById("computerScore");
const playerMoveImage = document.getElementById("PlayerMoveImage");
const computerMoveImage = document.getElementById("computerMoveImage");
const playerMoveTitle = document.querySelector(".player-fig-caption");
const computerMoveTitle = document.querySelector(".computer-fig-caption");
const alert = document.querySelector('#alert');
const alertText = document.querySelector('.alert-text');
const alertImg = document.querySelector('.alert-img');



function showAlert(){
  alert.classList.add('showalert')

  setTimeout(()=>{
    alert.classList.remove('showalert')
  },2000)
}
window.onload =showAlert()
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let result = "";
/* Highscores */
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
//create lets play alert 
/* Store Move Images */
const moveImages = {
  rock: "assets/idle-rock_orig.gif",
  paper: "assets/idle-paper_image.gif",
  scissors: "assets/idle-scissors_orig.gif",
};

//Get player move
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;

    if (player === "Rock") {
      rock();
      playerMoveImage.src = "assets/idle-rock_orig.gif";
    } else if (player === "Paper") {
      paper();
      playerMoveImage.src = "assets/idle-paper_image.gif";
    } else if (player === "Scissors") {
      scissors();
      playerMoveImage.src = "assets/idle-scissors_orig.gif";
    }
    getComputersMove();
    
  })
);

/* Get Computer Move */
function getComputersMove() {
  const moves = ["Rock", "Paper", "Scissors"];
  const moveNumber = Math.floor(Math.random() * 3);
  const computerMove = moves[moveNumber];
  console.log(computerMove);
  if (moveNumber === 0) {
    computerMoveImage.src = "assets/idle-rock_orig.gif";
  } else if (moveNumber === 1) {
    computerMoveImage.src = "assets/idle-paper_image.gif";
  } else {
    computerMoveImage.src = "assets/idle-scissors_orig.gif";
  }
  /* Passing Arguments for game functions */
  rock(computerMove);
  paper(computerMove);
  scissors(computerMove);
  saveToLocalStorage(computerMove);

  showPlayerScore.innerHTML = `${elementValue}:${playerScore}`;
  showComputerScore.innerHTML = `Computer:${computerScore}`;
  playerMoveTitle.innerHTML = `${player}`;
  computerMoveTitle.innerHTML = `${computerMove}`;

  console.log(computerScore);
  console.log(playerScore);
}

/* Get Outcome based on Player and Computer Moves*/
function rock(computerMove) {
  if (player === "Rock" && computerMove === player) {
    console.log("Both chose Rock so it is a Draw!");
    alertText.innerHTML = 'Draw!'
    alertImg.src = 'https://www.svgrepo.com/show/459649/tie-2.svg'
    showAlert()
    draws += 1;
  } else if (player === "Rock" && computerMove === "Paper") {
    alertText.innerHTML = 'Computer Wins!'
    alertImg.src = 'assets/dying-rock_orig.gif'
    showAlert()
    result = "You Lose!";
    console.log(result);
    computerScore += 1;
  } else if (player === "Rock" && computerMove === "Scissors") {
    result = "You Win!";
    alertText.innerHTML = `${elementValue} Wins!`
    alertImg.src = 'assets/dying-scissors_orig.gif'
    showAlert()
    console.log(result);
    playerScore += 1;
  }
}

function paper(computerMove) {
  if (player === "Paper" && computerMove === player) {
    console.log("Both chose paper so it is a Draw!");
    alertText.innerHTML = 'Draw!'
    alertImg.src = 'https://www.svgrepo.com/show/459649/tie-2.svg'
    showAlert()
    draws += 1;
  } else if (player === "Paper" && computerMove === "Rock") {
    result = "You Win!";
    alertText.innerHTML =` ${elementValue}  Wins!`
    alertImg.src = 'assets/dying-scissors_orig.gif'
    showAlert()
    
    console.log(result);
    playerScore += 1;
  } else if (player === "Paper" && computerMove === "Scissors") {
    result = "You Lose!";
    alertText.innerHTML = `ComputerWins!`
    alertImg.src = 'assets/dying-paper_orig.gif'
    showAlert()
    console.log(result);
    computerScore += 1;
  }
}

function scissors(computerMove) {
  if (player === "Scissors" && computerMove === player) {
    console.log("Both chose Scissors so it is a tie!");
    alertImg.src = 'https://www.svgrepo.com/show/459649/tie-2.svg'
    alertText.innerHTML = 'Draw!'
    showAlert()
    draws += 1;
  } else if (player === "Scissors" && computerMove === "Rock") {
    result = "You Lose!";
    alertText.innerHTML = 'Computer Wins!'
    alertImg.src = 'assets/dying-scissors_orig.gif'
    showAlert()
    console.log("computer wins");
    computerScore += 1;
  } else if (player === "Scissors" && computerMove === "Paper") {
    result = "You Win!";
    alertText.innerHTML = `${elementValue} Wins!`
    alertImg.src = 'assets/dying-paper_orig.gif'
    showAlert()
    console.log(result);
    playerScore += 1;
  }
}
/* Store results/inputs  */
function saveToLocalStorage(computerMove) {
  /* Get computer move and store in new variable */
  var computerMoveVariable = computerMove;
  /* function  to store variables on local storage */
  function eventHandler() {
    const saveScore = {
      playerScore: playerScore,
      playerName: elementValue,
      computerScore: computerScore,
      figCaptionOne: (playerMoveTitle.innerHTML = `${player}`),
      figCaptionTwo: (computerMoveTitle.innerHTML = `${computerMoveVariable}`),
    };

    highscores.push(saveScore);
    highscores.sort((a, b) => a.saveScore - b.saveScore);
    if (highscores.length === 5) {
      highscores.splice(0, 3);
    }

    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("scoreboard.html");
  }
  /* Execute function on click event */
  saveBtn.addEventListener("click", function saveScores() {
    eventHandler();
    
  });
}
