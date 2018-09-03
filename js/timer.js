export function timer() {
  const time = document.querySelector('.game__timer');

  function updateClock() {
    time.innerHTML--;

    if (time.innerHTML <= 0) {
      clearInterval(timeinterval);
    }

    if (time.innerHTML == 10) {
      time.style.color = `red`;
    }
  }
  const timeinterval = setInterval(updateClock, 1000);
}
