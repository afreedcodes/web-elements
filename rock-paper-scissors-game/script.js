let options = ["Rock", "Paper", "Scissors"];

let rpsBtnsEle = document.querySelectorAll(".rps-img"),
    imgBoxLeftEle = document.querySelector(".img-left"),
    imgLeftEle = imgBoxLeftEle.getElementsByTagName("img")[0],
    imgBoxRightEle = document.querySelector(".img-right"),
    imgRightEle = imgBoxRightEle.getElementsByTagName("img")[0],
    roundsTxtEle = document.querySelector(".rounds-txt"),
    resultTxtEle = document.querySelector(".result-txt"),
    userScoreTxtEle = document.querySelector(".user-score-txt"),
    botScoreTxtEle = document.querySelector(".bot-score-txt"),
    modalEle = document.querySelector(".modal"),
    modalImgEle = modalEle.getElementsByTagName("img")[0],
    modalTextEle = modalEle.getElementsByTagName("h4")[0];

let rounds = 5,
    userScore = 0,
    botScore = 0,
    timeOut = 2500;

const getBotChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
}

const rpsFunc = (btn) => {

    btn.addEventListener("click", () => {

        let botChoice = getBotChoice();
        // console.log("Bot choice " + botChoice);

        let userChoice = btn.getAttribute("data-choice");
        // console.log("User choice " + userChoice);

        rounds--
        roundsTxtEle.textContent = rounds;
        resultTxtEle.textContent = "Wait..."

        if (rounds === 0) {
            btn.style.pointerEvents = "none";
            setTimeout(() => {
                modalEle.classList.remove("hidden");
                if (botScore > userScore) {
                    modalImgEle.src = "./images/emoji-bot.jpg"
                    modalTextEle.textContent = "Bot Wins!"
                } else if (userScore > botScore) {
                    modalImgEle.src = "./images/emoji-partying.jpg"
                    modalTextEle.textContent = "Congrats You Win!"
                } else {
                    modalImgEle.src = "./images/emoji-nothing.png"
                    modalTextEle.textContent = "Nobody Wins!"
                }
            }, 3300)
        }

        btn.classList.add("active")
        rpsBtnsEle.forEach((btn) => {
            btn.style.pointerEvents = "none";
        });

        imgBoxLeftEle.style.animationName = "blink"
        imgBoxRightEle.style.animationName = "blink"

        setTimeout(() => {
            imgBoxLeftEle.style.animationName = "none"
            imgBoxRightEle.style.animationName = "none"

            btn.classList.remove("active")
            rpsBtnsEle.forEach((btn) => {
                btn.style.pointerEvents = "auto";
            });
        }, timeOut)

        if (userChoice === "Rock" && botChoice === "Paper") {
            setTimeout(() => {
                botScore++;
                botScoreTxtEle.textContent = botScore;
                resultTxtEle.textContent = "Paper Beats Rock"
                imgRightEle.src = "./images/paper.png"
                imgLeftEle.src = "./images/rock.png"
            }, timeOut)
        }

        if (userChoice === "Paper" && botChoice === "Scissors") {
            setTimeout(() => {
                botScore++;
                botScoreTxtEle.textContent = botScore;
                resultTxtEle.textContent = "Scissors Beats Paper"
                imgRightEle.src = "./images/scissors.png"
                imgLeftEle.src = "./images/paper.png"
            }, timeOut)
        }

        if (userChoice === "Scissors" && botChoice === "Rock") {
            setTimeout(() => {
                botScore++;
                botScoreTxtEle.textContent = botScore;
                resultTxtEle.textContent = "Rock Beats Scissors"
                imgRightEle.src = "./images/rock.png"
                imgLeftEle.src = "./images/scissors.png"
            }, timeOut)
        }

        if (userChoice === "Paper" && botChoice === "Rock") {
            setTimeout(() => {
                userScore++;
                userScoreTxtEle.textContent = userScore;
                resultTxtEle.textContent = "Paper Beats Rock"
                imgRightEle.src = "./images/rock.png"
                imgLeftEle.src = "./images/paper.png"
            }, timeOut)
        }

        if (userChoice === "Scissors" && botChoice === "Paper") {
            setTimeout(() => {
                userScore++;
                userScoreTxtEle.textContent = userScore;
                resultTxtEle.textContent = "Scissors Beats Paper"
                imgRightEle.src = "./images/paper.png"
                imgLeftEle.src = "./images/scissors.png"
            }, timeOut)
        }

        if (userChoice === "Rock" && botChoice === "Scissors") {
            setTimeout(() => {
                userScore++;
                userScoreTxtEle.textContent = userScore;
                resultTxtEle.textContent = "Rock Beats Scissors"
                imgRightEle.src = "./images/scissors.png"
                imgLeftEle.src = "./images/rock.png"
            }, timeOut)
        }

        if (userChoice === botChoice) {
            setTimeout(() => {
                resultTxtEle.textContent = "Its A Draw"
            }, timeOut)
        }

        imgRightEle.src = "./images/rock.png"
        imgLeftEle.src = "./images/rock.png"

    })


}

rpsBtnsEle.forEach((btn) => rpsFunc(btn))