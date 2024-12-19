let randomNumber = Math.floor(Math.random() * 100) + 1;
form = document.getElementById("number-guess-form"),
    statusMsg = document.querySelector(".status-msg");

let countTxt = document.querySelector(".count-txt"), count = 5;

let errMsg = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numberInput = document.getElementById("number-input");
    let guessedNumber = numberInput.value;
    let button = document.querySelector(".btn-primary");

    count--
    countTxt.innerText = count;

    if (count <= -1) {
        countTxt.innerText = 0;
        numberInput.setAttribute("disabled", "");
        button.setAttribute("disabled", "");
        statusMsg.innerText = "Your chances are over!";
        statusMsg.classList.add("danger");
        return;
    }


    if (!guessedNumber) {
        statusMsg.innerText = "Your chances are over";
        statusMsg.classList.add("danger");
    } else if (guessedNumber < randomNumber) {
        errMsg = true;
        statusMsg.innerText = "Your guess is too low";
        statusMsg.classList.add("danger");

        setTimeout(() => {
            errMsg = false;
            statusMsg.innerText = "";
            statusMsg.classList.remove("danger");
        }, 2000);
    } else if (guessedNumber > randomNumber) {
        errMsg = true;
        statusMsg.innerText = "Your guess is too high";
        statusMsg.classList.add("danger");

        setTimeout(() => {
            errMsg = false;
            statusMsg.innerText = "";
            statusMsg.classList.remove("danger");
        }, 2000);
    } else {
        statusMsg.innerHTML = `Congratulation! You guessed it correctly<br>The number was ${randomNumber}`
        statusMsg.classList.add("success");
        button.setAttribute("disabled", "true")
    }
})