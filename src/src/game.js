/* Getting index js dependancies */
/* const params = new URLSearchParams(window.location.search);
const elementId = params.get('player-name-text'); */
const elementValue = localStorage.getItem('playerNameValue');
console.log(elementValue);
/* Get buttons */
const choiceBtns = document.querySelectorAll("#moveBtn"); 
const saveBtn = document.getElementById('saveBtn');
/* Game secition */
const gameSection = document.querySelector('.game-section');
const showPlayerScore = document.getElementById('playerScore');
const showComputerScore = document.getElementById('computerScore');
const playerMoveImage = document.getElementById('PlayerMoveImage');
const computerMoveImage  = document.getElementById('computerMoveImage');
const playerMoveTitle = document.querySelector('.player-fig-caption');
const computerMoveTitle = document.querySelector('.computer-fig-caption');
/* let score = {
 
} */
let playerScore = 0;
let computerScore = 0 ;
let draws = 0 ;
let result = '';
/* Highscores */
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

 

function saveScores(){
  const saveScore = {
    playerScore :playerScore,
    computerScore: computerScore,
    playerName:elementValue,

  }
  highscores.push(saveScore);
  highscores.sort((a,b) => a.playerScore - b.playerScore);
  highscores.splice(5);
  console.log(saveScore)
  localStorage.setItem('highscores',JSON.stringify(highscores));
saveBtn.addEventListener('click',function saveScores(){
    const saveScore = {
      playerScore :playerScore,
      computerScore:computerScore,
      playerName:elementValue,
  
    }
    highscores.push(saveScore);
    highscores.sort((a,b) => a.playerScore - b.playerScore);
    highscores.splice(5);
    console.log(saveScore)
    localStorage.setItem('highscores',JSON.stringify(highscores));
    window.location.assign('/src/src/scoreboard.html');
  })

/* Store Move Images */
const moveImages = {
  rock:'assets/idle-rock_orig.gif',
  paper:'assets/idle-paper_image.gif',
  scissors:'assets/idle-scissors_orig.gif'
}




 //Get player move 
 choiceBtns.forEach(button => button.addEventListener("click", () => {

	player = button.textContent;
 
  if(player === 'Rock'){
    rock();
    playerMoveImage.src ='assets/idle-rock_orig.gif';
    
  }else if(player === 'Paper'){
    paper();
    playerMoveImage.src ='assets/idle-paper_image.gif';
  }else if (player === 'Scissors'){
    scissors();
    playerMoveImage.src = 'assets/idle-scissors_orig.gif'
  }
  saveScores();
  getComputersMove();
  
}));

/* Get Computer Move */
function getComputersMove() {
  const moves = ["Rock", "Paper", "Scissors"];
  const moveNumber = Math.floor(Math.random() * 3);
  const computerMove = moves[moveNumber];
  console.log(computerMove)
  if(moveNumber === 0  ){
    computerMoveImage.src = 'assets/idle-rock_orig.gif'
  }else if(moveNumber === 1){
    computerMoveImage.src = 'assets/idle-paper_image.gif'
  }else{
    computerMoveImage.src = 'assets/idle-scissors_orig.gif'
  }
  /* Passing Arguments for game functions */
  rock(computerMove);
  paper(computerMove);
  scissors(computerMove);

  showPlayerScore.innerHTML = `${playerScore}`;
  showComputerScore.innerHTML = `${computerScore}`;
  playerMoveTitle.innerHTML = `${player}`;
  computerMoveTitle.innerHTML= `${computerMove}`;
  console.log(computerScore);
console.log(playerScore)
  }


/* Get Outcome based on Player and Computer Moves*/
//Store functions in an object
function rock(computerMove){
    if (player=== "Rock" && computerMove === player) {
      console.log("Both chose Rock so it is a Draw!");
      draws+=1;
      } else if (player === "Rock" && computerMove === "Paper") {
        result = 'You Lose!';
        console.log(result);
        computerScore+=1;
      } else if (player === "Rock" && computerMove === "Scissors") {
        result = 'You Win!' ;
        console.log(result);
        playerScore+=1;
      }
       
  }



function paper(computerMove){
    if (player === "Paper" && computerMove === player) {
        console.log("Both chose paper so it is a Draw!");
        draws+=1;
      } else if (player === "Paper" && computerMove === "Rock") {
        result = 'You Win!';
        console.log(result)
        playerScore+=1;
      } else if (player === "Paper" && computerMove === "Scissors") {
        result = 'You Lose!';
        console.log(result);
        computerScore+=1;

        
      }

}

function scissors(computerMove){
    if (player === "Scissors" && computerMove === player) {
        console.log("Both chose Scissors so it is a tie!");
        draws+=1;
      } else if (player === "Scissors" && computerMove === "Rock") {
        result = 'You Lose!';
        console.log("computer wins");
        computerScore+=1;
      } else if (player === "Scissors" && computerMove === "Paper") {
        result = 'You Win!';
        console.log(result );
        playerScore+=1;
      }
      
  }
}