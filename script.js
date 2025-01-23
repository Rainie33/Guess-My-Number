'use strict';

// 設定數字範圍1~20
let serectNumber = Math.trunc(Math.random() * 20) + 1;

// 設定初始值 1.最多可以玩20次 2.紀錄最高得分初始值為0
let score = 20;
let highscore = 0;

// 建立 Function 呼叫重複的程式碼
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// 當玩家點擊 check 按鈕時，開始玩遊戲
document.querySelector('.check').addEventListener('click', function () {
  // 將輸入框上的數字透過 click print 在 console
  // 透過 Number() 將字串轉換為數字
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 1.當玩家沒有輸入數字
  if (!guess) {
    displayMessage('⛔ No number!');

    // 2.當玩家猜對數字
  } else if (guess === serectNumber) {
    displayMessage('🎉 Correct Number!');

    // - 顯示答對數字
    displayNumber(serectNumber);

    // - CSS. 改變背景顏色和數字寬度
    document.querySelector('body').style.backgroundColor = '#fb7185';
    document.querySelector('.number').style.width = '30rem';

    // - 保留達對最高得分數
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 3.當玩家沒有猜對數字
  } else if (guess !== serectNumber) {
    if (score > 1) {
      displayMessage(guess > serectNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }

  // 重新開始遊戲，設定初始值
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    serectNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');

    // 將輸入框的值設定為空字串
    document.querySelector('.guess').value = '';

    // CSS. 將背景顏色和寬度改回預設
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
