let msgTextEle = document.querySelector(".msg-text");
let captcha = "";

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const actualLength = Math.min(6, 6);

    for (let i = 0; i < actualLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex) + ' ';
    }

    captcha = result;
    document.querySelector(".captcha-text").textContent = captcha;
    msgTextEle.textContent = ""
}
generateCaptcha()



const validateCaptcha = () => {
    let inputEle = document.getElementById("captcha-input");

    if(inputEle.value === captcha.split(" ").join("")){
        msgTextEle.classList.add("text-green-600");
        msgTextEle.textContent = "Nice! You don't appear to be a robot.";
        inputEle.value = "";
    }else{
        msgTextEle.classList.add("text-red-600");
        msgTextEle.textContent = "Please enter valid captcha.";
        inputEle.value = "";
    }
}