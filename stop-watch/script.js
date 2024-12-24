let hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    miliseconds = document.querySelector(".miliseconds"),
    startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

let miliCounter = 0,
    secCounter = 0,
    minCounter = 0,
    hrCounter = 0,
    intervalId;

const startStopWatch = () => {
    intervalId = setInterval(() => {

        miliCounter++
        miliseconds.innerText = (miliCounter < 10) ? "0" + miliCounter : miliCounter;

        if (miliCounter === 100) {
            miliCounter = 0;
            secCounter++;
            seconds.innerText = (secCounter < 10) ? "0" + secCounter : secCounter;

            if (secCounter === 60) {
                secCounter = 0;
                minCounter++;
                minutes.innerText = (minCounter < 10) ? "0" + minCounter : minCounter;

                if (minCounter === 60) {
                    minCounter = 0;
                    hrCounter++;
                    hours.innerText = (hrCounter < 10) ? "0" + hrCounter : hrCounter;
                }
            }
        }

    }, 10)
}

const clearStopWatch = () => {
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener("click", () => {
    stopBtn.removeAttribute("disabled", "");
    startStopWatch();
    startBtn.setAttribute("disabled", "");
});

stopBtn.addEventListener("click", () => {
    startBtn.removeAttribute("disabled", "");
    clearStopWatch();
    stopBtn.setAttribute("disabled", "");
});

resetBtn.addEventListener("click", () => {
    stopBtn.removeAttribute("disabled", "");
    startBtn.removeAttribute("disabled", "");
    clearStopWatch()
    miliCounter = 0; miliseconds.innerText = "00";
    secCounter = 0; seconds.innerText = "00";
    minCounter = 0; minutes.innerText = "00";
    hrCounter = 0; hours.innerText = "00";
});