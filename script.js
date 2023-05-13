'use strict';
document.querySelector('.guess').textContent = 16;
//document.querySelector('.number').textContent = 18;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'NO number!';
  } else if (secretNumber !== guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        secretNumber > guessNumber ? 'Low!' : 'High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (secretNumber === guessNumber) {
    document.querySelector('.message').textContent = 'Correct answer!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#e8eae6';
  document.querySelector('.number').style.width = '15rem';
  guessNumber = Number((document.querySelector('.guess').value = ''));
});
