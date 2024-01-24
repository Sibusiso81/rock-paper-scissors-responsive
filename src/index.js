/* Intro*/
const playerNameTextInput = document.getElementById('playerNameText');
const playBtn = document.getElementById('playBtn');
const gaemIntro = document.querySelector('.game-intro');

/* Get player name */
  playBtn.addEventListener('click',function getPlayerName(){
  let playerName = playerNameTextInput.value;
  localStorage.setItem('playerNameValue', playerName);
 window.location.assign('/src/game.html');
});