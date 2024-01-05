const moveBtn = document.querySelectorAll("#MoveBtn"); /* Get buttons */
const container=document.getElementById('container');
const buttons  = document.getElementsByTagName('button');

//const moveValue = moveBtn.textContent; /* Get player move */
for (let i = 0; i < buttons.length; i++) {
  const buttonContent =buttons[i].textContent;
  console.log(buttonContent);
}
/* Compute functions  once clicked */
buttons.addEventListener("click", function complete() {
  getComputersMove();
  //getPlayersMove();
  console.log('clicked')

});

/* Get Computer Move */
function getComputersMove() {
  const moves = ["Rock", "Paper", "Scissors"];
  const moveNumber = Math.floor(Math.random() * 3);
  const computerMove = moves[moveNumber];
  console.log("Computer played " + computerMove);
 
  /* rock(computerMove); */
 /*  paper(computerMove);
   */
 scissors(computerMove);
  }


/* Get Outcome based on Player and Computer Moves*/
function rock(computersMove){
    if (moveValue === "Rock" &&computersMove === moveValue) {
        console.log("Both chose rock so it is a tie!");
      } else if (moveValue === "Rock" && computersMove === "Paper") {
        console.log("computer wins");
      } else if (moveValue === "Rock" && computersMove === "Scissors") {
        console.log("You win!");
      }
}
function paper(computersMove){
    if (moveValue === "Paper" && computersMove === moveValue) {
        console.log("Both chose paper so it is a tie!");
      } else if (moveValue === "Paper" && computersMove === "Rock") {
        console.log("You win!");
      } else if (moveValue === "Rock" && computersMove === "Scissors") {
        console.log("You Lose!");
      }
      //
}

function scissors(computersMove){
    if (moveValue === "Scissors" && computersMove === moveValue) {
        console.log("Both chose rock so it is a tie!");
      } else if (moveValue === "Scissors" && computersMove === "Rock") {
        console.log("computer wins");
      } else if (moveValue === "Scissors" && computersMove === "Paper") {
        console.log("You win!");
      }
      console.log('scissors function')
}
scissors();
