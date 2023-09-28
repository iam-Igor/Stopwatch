const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const minH1 = document.getElementById("minutes");
const sech1 = document.getElementById("seconds");

let seconds = 0;
let minutes = 0;

let timer = true;

const startTimer = function () {
  if (timer) {
    seconds++;
  }

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    counter = 0;
    seconds = 0;
    minutes = 0;
  }

  console.log(seconds);
  sech1.innerHTML = seconds;
  minH1.innerText = minutes;
};

const timer1 = function () {
  setInterval(startTimer, 1000);
  timer = true;
};

startBtn.addEventListener("click", function () {
  timer1();
  timer = true;
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
