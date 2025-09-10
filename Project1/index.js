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

// 2. New Game button
let init = () => {
  // 2.1 Set all scores to 0
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player1score.textContent = score1;
  player2score.textContent = score2;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  // 2.2 Set player 1 as active player
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");

  // 2.3 Remove dice image
  diceEl.classList.add("hidden");
};

init();
let changePlayer = () => {
  // 3.1.3.1 Change player
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  // 3.1.3.1.1 Current score should be o of that player
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};
btnNew.addEventListener("click", init);
// 3.Roll dice Button Click
btnRoll.addEventListener("click", () => {
  // 3.1 Currently we are playing or not
  if (playing == true) {
    // 3.1.1 We have to generate a random Number between 1-6
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    // 3.1.2 Display the image of random number dice roll

    diceEl.src = `dice-${randomNumber}.png`;
    diceEl.classList.remove("hidden");
    // 3.1.3 If random number is 1
    if (randomNumber !== 1) {
      // 3.1.3.2 Add random number value into current score
      currentScore = currentScore + randomNumber;

      // 3.1.3.2.1 We have to show current player current score
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

// 4. Hold button event
btnHold.addEventListener("click", () => {
  // 4.1 Currently we are playing or not
  if (playing == true) {
    // 4.2 Is add current score into total score of active player
    if (activePlayer === 0) {
      score1 = score1 + currentScore;
      player1score.textContent = score1;
      // 4.3 check whether the total score is greate tghan 20 or not
      if (score1 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player1.classList.add("player--winner");
      } else {
        changePlayer();
      }
      // 4.4 Greater than stop the game change the color and disable all the button except new game
    } else {
      score2 = score2 + currentScore;
      player2score.textContent = score2;
      // 4.3 check whether the total score is greate tghan 20 or not
      if (score2 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player2.classList.add("player--winner");
      } else {
        changePlayer();
      }
    }
  }
});
