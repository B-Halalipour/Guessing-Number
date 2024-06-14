'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // getting the data from user:
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  if (!guess) {
    displayMessage('⛔ Please enter a Number!');
    // winning situation:
  } else if (guess === secretNumber) {
    displayMessage('🎉 You are a winner!');
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when the user guesses wrong:
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      guess < secretNumber
        ? displayMessage('📉 Too Low!')
        : displayMessage('📈 Too High!');
    } else {
      // losing situation:
      displayMessage('💥 You Lost!');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

// again btn:
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
