/* Variables */
let playerinfo = JSON.parse(localStorage.getItem('highscores'));
const playersName = document.querySelector('.name');
const  finalScore = document.querySelector('.score');
const finalResultText = document.querySelector('.resultText');
const FinalResultImage = document.getElementById('FinalResultImage');
const playAgain = document.getElementById('playAgainBtn');
const quitBtn = document.getElementById('quitBtn');
const playerinfoIndex = playerinfo[playerinfo.length-1];
/* Display result on load */
endResult();
/* Return to game */
playAgain.addEventListener('click', function goToIndex(){
    clearLocalStorage()
    window.location.assign('game.html');
}); 
/* Return to index */
quitBtn.addEventListener('click', function goToIndex(){
    clearLocalStorage()
    window.location.assign('index.html');
}); 
/* Generate end result and display  */
function endResult(){
    if(playerinfoIndex.playerScore < playerinfoIndex.computerScore && playerinfo.length>1){
        playersName.innerHTML = `Wow  ${playerinfoIndex .playerName}  You lost.`;
        finalScore.innerHTML = `${playerinfoIndex.playerScore}/${playerinfoIndex.computerScore}`;
        finalResultText.innerHTML = 'You really lost to an inanimate object.';
       
    }
    else if(playerinfoIndex.playerScore > playerinfoIndex.computerScore && playerinfo.length>1){
        playersName.innerHTML = `${playerinfoIndex .playerName}  You Won!.`;
        finalScore.innerHTML = `${playerinfoIndex.playerScore}/${playerinfoIndex.computerScore}`;
        finalResultText.innerHTML = `What's an inanimate object against the pinicle of the human race ..NOTHING!`;
      
    }else{
        playersName.innerHTML = `${playerinfoIndex .playerName}  You Drew!.`;
        finalScore.innerHTML = `${playerinfoIndex.playerScore}/${playerinfoIndex.computerScore}`;
        finalResultText.innerHTML = `Keep going!`;
    }
    
}

/* Clear local storage so latest results are generated */
 function clearLocalStorage(){
    playerinfo = []
    localStorage.removeItem('playerinfo');
}