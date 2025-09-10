// 1. Instance of all nodes
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let player1score = document.querySelector("#score--0");
let player2score = document.querySelector("#score--1");

let currentScore1 = document.querySelector("#current--0");
let currentScore2 = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let score1, score2, currentScore, activePlayer, playing;

let init = () => {
  score1 = 0;
  score2 = 0;
  player1score.textContent = score1;
  diceEl.classList.add("hidden");
  currentScore1.textContent = 0;
  console.log("hello");
};

// init();

btnNew.addEventListener("click", init);
