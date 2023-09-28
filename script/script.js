const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

const minH1 = document.getElementById("minutes");
const sech1 = document.getElementById("seconds");

const lapBoard = document.getElementById("lap-board");

let seconds = 0;
let minutes = 0;

let timer = true;
let timeleft;

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

  sech1.innerHTML = seconds;
  minH1.innerText = minutes;

  let allTime = minutes + ":" + seconds;

  localStorage.setItem("allTime", allTime);
};

const timer1 = function () {
  timeleft = setInterval(startTimer, 1000);
  timer = true;
};

startBtn.addEventListener("click", function () {
  timer1();
  timer = true;
});

stopBtn.addEventListener("click", function () {
  timer = false;
  clearInterval(timeleft);
});

resetBtn.addEventListener("click", function () {
  location.reload();
  localStorage.removeItem("allTime");
  seconds = 0;
  minutes = 0;
});

lapBtn.addEventListener("click", function () {
  const allTime = localStorage.getItem("allTime");
  const newLap = document.createElement("h1");

  newLap.innerText = allTime;
  lapBoard.appendChild(newLap);
});
