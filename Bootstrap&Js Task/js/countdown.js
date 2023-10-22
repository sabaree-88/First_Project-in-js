let countdown;
let totalTime = 0;
let currentTime = 0;

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

function startTimer() {
  if (totalTime === 0) {
    totalTime = (parseInt(hoursInput.value) * 3600) + (parseInt(minutesInput.value) * 60) + parseInt(secondsInput.value);
    currentTime = totalTime;
    updateTimerDisplay();
  }

  countdown = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(countdown);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(countdown);
  totalTime = 0;
  currentTime = 0;
  hoursInput.value = "0";
  minutesInput.value = "0";
  secondsInput.value = "0";
  updateTimerDisplay();
  progressBar.style.width = "0";
  startButton.disabled = false;
}

function updateTimer() {
  if (currentTime > 0) {
    currentTime--;
    updateTimerDisplay();
    updateProgressBar();
  } else {
    clearInterval(countdown);
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(currentTime / 3600);
  const minutes = Math.floor((currentTime % 3600) / 60);
  const seconds = currentTime % 60;

  timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateProgressBar() {
  const percentage = ((totalTime - currentTime) / totalTime) * 100;
  progressBar.style.width = percentage + "%";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);