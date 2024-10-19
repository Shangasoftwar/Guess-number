'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

const check = document.querySelector('.check');
let score = 20; //NOTE i use let bcs const is imutable and the score should be decreased in value
let highscore = 0;
check.addEventListener('click', function () {
  const INp = Number(document.querySelector('.guess').value);

  /*NOTE captures the inputvalue at the current time java script one time running in the inside cupture the
    current time when it is running but wehn the out side script run it and didn't update it bcs script is one time running*/

  const message = document.querySelector('.message');
  console.log(INp, typeof INp); //NOTE log the current input value
  if (INp === number) {
    document.querySelector('.number').textContent = number;
    message.textContent = 'correct number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (!INp) {
    message.textContent = 'no valid number ⛔';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'you loss the game 💥🧨';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    message.textContent = INp > number ? 'too high 📈' : 'too low 📉';

    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'you loss the game 💥🧨';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
});
