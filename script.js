'use strict';

// Selecting elements
const playerEl = document.querySelector('.player');
const computerEl = document.querySelector('.computer');
const winnerEl = document.querySelector('.winner');

// Selecting buttons
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissor = document.querySelector('.btn-scissor');
const btnNew = document.querySelector('.new-game');

// Selecting images
const playerImg = document.querySelector('.player-img');
const computerImg = document.querySelector('.computer-img');

// Selecting Scores
const playerPointsEl = document.querySelector('.player-points');
const computerPointsEl = document.querySelector('.computer-points');

// Main variables
let playerPlay;
let computerPlay;
let scores = [0, 0];

const hideButtons = function () {
  btnRock.classList.add('hide');
  btnPaper.classList.add('hide');
  btnScissor.classList.add('hide');
  btnNew.style.marginLeft = '122px';
};

const showWinner = function () {
  setTimeout(() => {
    if (scores[0] === 3) {
      winnerEl.classList.remove('hide');
      winnerEl.textContent = '🏆 You win';
      hideButtons();
    } else if (scores[1] === 3) {
      winnerEl.classList.remove('hide');
      winnerEl.textContent = '🥲 Comp win';
      hideButtons();
    }
  }, 900);
};

const checkWinner = function () {
  if (
    (playerPlay === 'rock' && computerPlay === 'scissor') ||
    (playerPlay === 'scissor' && computerPlay === 'paper') ||
    (playerPlay === 'paper' && computerPlay === 'rock')
  ) {
    scores[0] += 1;
    setTimeout(() => {
      playerPointsEl.textContent = scores[0];
    }, 900);
  } else if (
    (playerPlay === 'scissor' && computerPlay === 'rock') ||
    (playerPlay === 'paper' && computerPlay === 'scissor') ||
    (playerPlay === 'rock' && computerPlay === 'paper')
  ) {
    scores[1] += 1;
    setTimeout(() => {
      computerPointsEl.textContent = scores[1];
    }, 900);
  }
  showWinner();
};

const showComputerChoice = function (choice, image) {
  computerPlay = choice;
  setTimeout(() => {
    computerImg.src = image;
  }, 900);
};

const computerTurn = function () {
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      showComputerChoice('rock', 'stoneComputer.png');
      break;
    case 2:
      showComputerChoice('paper', 'paperComputer.png');
      break;
    case 3:
      showComputerChoice('scissor', 'scissorsComputer.png');
      break;
  }
};

const addShakeHands = function () {
  playerImg.src = 'stonePlayer.png';
  computerImg.src = 'stoneComputer.png';
  playerImg.classList.add('shakePlayer');
  computerImg.classList.add('shakeComputer');
};

const removeShakeHands = function () {
  playerImg.classList.remove('shakePlayer');
  computerImg.classList.remove('shakeComputer');
};

const showPlayerChoice = function (choice, image) {
  addShakeHands();
  setTimeout(() => {
    playerImg.src = image;
    removeShakeHands();
  }, 900);
  playerPlay = choice;
  computerTurn();
  checkWinner();
};

btnPaper.addEventListener('click', function () {
  showPlayerChoice('paper', 'paperPlayer.png');
});

btnRock.addEventListener('click', function () {
  showPlayerChoice('rock', 'stonePlayer.png');
});

btnScissor.addEventListener('click', function () {
  showPlayerChoice('scissor', 'scissorsPlayer.png');
});

btnNew.addEventListener('click', function () {
  playerPlay = '';
  computerPlay = '';
  scores = [0, 0];
  playerImg.src = 'stonePlayer.png';
  computerImg.src = 'stoneComputer.png';
  btnRock.classList.remove('hide');
  btnPaper.classList.remove('hide');
  btnScissor.classList.remove('hide');
  btnNew.style.marginLeft = '210px';
  winnerEl.classList.add('hide');
  computerPointsEl.textContent = 0;
  playerPointsEl.textContent = 0;
});
