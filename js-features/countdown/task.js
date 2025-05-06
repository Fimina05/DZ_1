const timerEl = document.getElementById('timer');
let seconds = Number(timerEl.textContent);

const countdown = setInterval(() => {
  seconds -= 1;
  timerEl.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
  }
}, 1000);