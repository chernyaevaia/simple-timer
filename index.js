const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = (seconds) => {
  const nowDate = new Date();
  const countDownFrom = new Date(
    nowDate.setTime(nowDate.getTime() + seconds * 1000)
  ).getTime();

  function addZeroIfOneDigit(n) {
    return (n < 10 ? "0" : "") + n;
  }

  setInterval(function () {
    const nowTime = new Date().getTime();
    const difference = countDownFrom - nowTime;
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timerEl.innerHTML =
      addZeroIfOneDigit(hours) +
      ":" +
      addZeroIfOneDigit(minutes) +
      ":" +
      addZeroIfOneDigit(seconds);

    if (difference < 0) {
      clearInterval();
      timerEl.innerHTML = "hh:mm:ss";
    }
  }, 1000);
};

inputEl.addEventListener("input", (e) => {
  inputEl.value = e.target.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  createTimerAnimator(seconds);
  inputEl.value = "";
});
