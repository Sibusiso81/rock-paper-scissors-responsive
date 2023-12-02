const ContainerEl = document.querySelector(".Animation-text-container");
const words = ["Rock", "Paper", "Scissors"]

let characterIndex = 0;

let = wordsIndex = 0;




UpdateText()


function UpdateText() {
	characterIndex++;
	ContainerEl.innerHTML =
		`<h1 > ${words[wordsIndex].slice(0, characterIndex)}</h1>`


	if (characterIndex === words[wordsIndex].length) {
		wordsIndex++
		characterIndex = 0;

	}
	setTimeout(UpdateText, 400)
}



const PlayBtn = document.querySelector(".game-button");
const introScreen = document.querySelector(".game-intro");
const Match = document.querySelector(".gameDiv");
const text = document.querySelector("#Text");
const container = document.querySelector(".container ");
const gifs = document.querySelector(".gif-container");
const EndGame = document.querySelector("EndgameBtn");
const IntroText = document.querySelector(".Animation-text-container");
const RockImage = document.getElementById("Rock-Img");
const PaperImage = document.getElementById("Paper-Img");
const ScissorsImage = document.getElementById("Scissors-Img");
const Btns = document.querySelector(".gif-container");
const score = 0;
const Img1 = document.getElementById("Rock-Img");
const Img2 = document.getElementById("Paper-Img");
const Img3 = document.getElementById("Scissors-Img");


PlayBtn.addEventListener("click", function () {
	PlayBtn.classList.add("fadeOut");
	introScreen.classList.add("fadeOut");
	text.classList.add("fadeIn");
	container.classList.add("fadeIn");
	gifs.classList.add("fadeIn");
	console.log("button clicked");
	Btns.classList.add("fadeOut");
	Img1.classList.add("fadeIn");
	Img2.classList.add("fadeIn");
	Img3.classList.add("fadeIn");

})


const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

	player = button.textContent;
	computerTurn();
	playerText.textContent = `Player: ${player}`;
	computerText.textContent = `Computer: ${computer}`;
	resultText.textContent = checkWinner();
}));

function computerTurn(score) {

	const randNum = Math.floor(Math.random() * 3) + 1;

	switch (randNum) {
		case 1:
			computer = "ROCK";
			break;
		case 2:
			computer = "PAPER";
			break;
		case 3:
			computer = "SCISSORS";
			break;



	}
}

function checkWinner() {
	if (player == computer) {
		return "Draw!";


	}

	else if (computer == "ROCK") {
		;

		return (player == "PAPER") ? "You Win!" : "You Lose!"
	}

	else if (computer == "PAPER") {

		return (player == "SCISSORS") ? "You Win!" : "You Lose!"
	}

	else if (computer == "SCISSORS") {

		return (player == "ROCK") ? "You Win!" : "You lose!"

	}


}





