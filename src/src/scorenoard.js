const existingValue =JSON.parse( localStorage.getItem('highscores'));
console.log(existingValue);

/* Row One */
const playerOne = document.querySelector('.player-One');
const resultOne = document.querySelector('.result-One');
const scoreOne = document.querySelector('.score-One');
/* Row Two */
const playerTwo = document.querySelector('.player-Two');
const resultTwo = document.querySelector('.result-Two');
const scoreTwo = document.querySelector('.score-Two');
/* Row 3 */
const playerThree= document.querySelector('.player-Three');
const resultThree = document.querySelector('.result-Three');
const scoreThree = document.querySelector('.score-Three');
/* Row 4 */
const playerFour = document.querySelector('.player-Four');
const resultFour = document.querySelector('.result-Four');
const scoreFour = document.querySelector('.score-Four');
/* Row 5 */
const playerFive = document.querySelector('.player-Five');
const resultFive = document.querySelector('.result-Five');
const scoreFive = document.querySelector('.score-Five');

/* Btns */
const homeBtn = document.getElementById('backBtn');
updateScoreBoard();
function updateScoreBoard(){
    playerOne.innerHTML = `${existingValue[0].playerName}`;
    /* resultOne.innerHTML = `${existingValue[0]}` */
    if(existingValue[0].computerScore > existingValue[0].playerScore){
        resultOne.innerHTML = `loss`
    }else if(existingValue[0].computerScore === existingValue[0].playerScore){
        resultOne.innerHTML = `Draw`;
    }else{
        resultOne.innerHTML = `Win!`;
    }
    scoreOne.innerHTML = `${existingValue[0].playerScore}`

    /* Two */
    playerTwo.innerHTML = `${existingValue[1].playerName}`;
    /* resultOne.innerHTML = `${existingValue[1]}` */
    if(existingValue[1].computerScore > existingValue[1].playerScore){
        resultOne.innerHTML = `loss`
    }else if(existingValue[1].computerScore === existingValue[1].playerScore){
        resultTwo.innerHTML = `Draw`;
    }else{
        resultTwo.innerHTML = `Win!`;
    }
    scoreTwo.innerHTML = `${existingValue[1].playerScore}`;

    /* Three */
    playerThree.innerHTML = `${existingValue[2].playerName}`;
    /* resultOne.innerHTML = `${existingValue[0]}` */
    if(existingValue[2].computerScore > existingValue[2].playerScore){
        resultThree .innerHTML = `loss`
    }else if(existingValue[2].computerScore === existingValue[2].playerScore){
        resultThree .innerHTML = `Draw`;
    }else{
        resultThree .innerHTML = `Win!`;
    }
    scoreThree .innerHTML = `${existingValue[2].playerScore}`;

    /* Four */
    playerFour.innerHTML = `${existingValue[3].playerName}`;
    /* resultOne.innerHTML = `${existingValue[0]}` */
    if(existingValue[3].computerScore > existingValue[3].playerScore){
        resultFour.innerHTML = `loss`
    }else if(existingValue[3].computerScore === existingValue[3].playerScore){
        resultFour.innerHTML = `Draw`;
    }else{
        resultFour.innerHTML = `Win!`;
    }
    scoreFour.innerHTML = `${existingValue[4].playerScore}`;

    /* Five */
    playerFive.innerHTML = `${existingValue[4].playerName}`;
    /* resultOne.innerHTML = `${existingValue[0]}` */
    if(existingValue[4].computerScore > existingValue[0].playerScore){
        resultFive.innerHTML = `loss`
    }else if(existingValue[4].computerScore === existingValue[4].playerScore){
        resultFive.innerHTML = `Draw`;
    }else{
        resultFive.innerHTML = `Win!`;
    }
    scoreFive.innerHTML = `${existingValue[4].playerScore}`
};
homeBtn.addEventListener('click', function goToIndex(){
    window.location.assign('src/src/');
});