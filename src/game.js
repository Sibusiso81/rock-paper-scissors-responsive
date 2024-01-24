/* Define variabels */
const elementValue = localStorage.getItem("playerNameValue");
console.log(elementValue);
/* Get buttons */
const choiceBtns = document.querySelectorAll("#moveBtn");
const saveBtn = document.getElementById("saveBtn");
/* Game secition */
const gameSection = document.querySelector(".game-section");
const showPlayerScore = document.getElementById("playerScore");
const showComputerScore = document.getElementById("computerScore");
const playerMoveImage = document.getElementById("PlayerMoveImage");
const computerMoveImage = document.getElementById("computerMoveImage");
const playerMoveTitle = document.querySelector(".player-fig-caption");
const computerMoveTitle = document.querySelector(".computer-fig-caption");

let playerScore = 0;
let computerScore = 0;
let draws = 0;
let result = "";
/* Highscores */
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

/* Store Move Images */
const moveImages = {
  rock: "/src/assets/idle-rock_orig.gif",
  paper: "/src/assets/idle-paper_image.gif",
  scissors: "/src/assets/idle-scissors_orig.gif",
};

//Get player move
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;

    if (player === "Rock") {
      rock();
      playerMoveImage.src = "/src/assets/idle-rock_orig.gif";
    } else if (player === "Paper") {
      paper();
      playerMoveImage.src = "/src/assets/idle-paper_image.gif";
    } else if (player === "Scissors") {
      scissors();
      playerMoveImage.src = "/src/assets/idle-scissors_orig.gif";
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
    computerMoveImage.src = "/src/assets/idle-rock_orig.gif";
  } else if (moveNumber === 1) {
    computerMoveImage.src = "/src/assets/idle-paper_image.gif";
  } else {
    computerMoveImage.src = "/src/assets/idle-scissors_orig.gif";
  }
  /* Passing Arguments for game functions */
  rock(computerMove);
  paper(computerMove);
  scissors(computerMove);
  saveToLocalStorage(computerMove);

  showPlayerScore.innerHTML = `${playerScore}`;
  showComputerScore.innerHTML = `${computerScore}`;
  playerMoveTitle.innerHTML = `${player}`;
  computerMoveTitle.innerHTML = `${computerMove}`;

  console.log(computerScore);
  console.log(playerScore);
}

/* Get Outcome based on Player and Computer Moves*/
function rock(computerMove) {
  if (player === "Rock" && computerMove === player) {
    console.log("Both chose Rock so it is a Draw!");
    draws += 1;
  } else if (player === "Rock" && computerMove === "Paper") {
    result = "You Lose!";
    console.log(result);
    computerScore += 1;
  } else if (player === "Rock" && computerMove === "Scissors") {
    result = "You Win!";
    console.log(result);
    playerScore += 1;
  }
}

function paper(computerMove) {
  if (player === "Paper" && computerMove === player) {
    console.log("Both chose paper so it is a Draw!");
    draws += 1;
  } else if (player === "Paper" && computerMove === "Rock") {
    result = "You Win!";
    console.log(result);
    playerScore += 1;
  } else if (player === "Paper" && computerMove === "Scissors") {
    result = "You Lose!";
    console.log(result);
    computerScore += 1;
  }
}

function scissors(computerMove) {
  if (player === "Scissors" && computerMove === player) {
    console.log("Both chose Scissors so it is a tie!");
    draws += 1;
  } else if (player === "Scissors" && computerMove === "Rock") {
    result = "You Lose!";
    console.log("computer wins");
    computerScore += 1;
  } else if (player === "Scissors" && computerMove === "Paper") {
    result = "You Win!";
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
    window.location.assign("/src/pages/scoreboard.html");
  }
  /* Execute function on click event */
  saveBtn.addEventListener("click", function saveScores() {
    eventHandler();
  });
}
