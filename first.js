let startButton = document.querySelector(".start")
let resetButton = document.querySelector(".reset")
let dsptime = document.querySelector(".timmer")
let time;
let minute = 0
let sec = 0
startButton.addEventListener("click", () => {
    startButton.classList.toggle("button_chge")
    if (startButton.innerText === "START") {
        time = setInterval(() => {
            if (sec == 59) {
                sec = 0;
                minute += 1
            } else {
                sec += 1
            }
            dsptime.innerHTML = `${minute}:${sec}`
        }, 1000)
        startButton.innerText = "STOP"
    }
    else {
        clearInterval(time)
        startButton.innerText = "START"
    }
})
resetButton.addEventListener("click", () => {
    startButton.innerText = "START"
    clearInterval(time)
    minute = 0
    sec = 0
    dsptime.innerHTML = `${minute}:${sec}`
})

