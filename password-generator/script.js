// # Password Generator
let length = 4;
let uppercase = false;
let numbers = false;
let symbols = false;

let passText = document.querySelector(".pass-txt"),
    passCopyBtn = document.querySelector(".cp-btn");

function generatePassword(lengthVal, numbersVal, symbolsVal, upperCaseVal) {
    let result = '';
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";

    console.log(lengthVal, numbersVal, symbolsVal, upperCaseVal); 

    if (numbersVal) {
        characters += numbers;
    }

    if (symbolsVal) {
        characters += symbols;
    }

    if (upperCaseVal) {
        characters += uppChar;
    }

    for (let i = 0; i < lengthVal; i++) {
        let genChar = Math.floor(Math.random() * characters.length);
        result += characters.charAt(genChar);
    }

    return passText.textContent = result
}

// # Length Slider
let passLengthEle = document.getElementById("length-slider"),
    passLengthTxtEle = document.querySelector(".p-length-txt");

function slider() {
    let min = parseInt(passLengthEle.min);
    let max = parseInt(passLengthEle.max);
    let val = parseInt(passLengthEle.value);

    let valPercent = ((val - min) / (max - min)) * 100;
    passLengthEle.style.background = `linear-gradient(to right, #5f27cd ${valPercent}%, #5f27cd60 ${valPercent}%)`;
    passLengthTxtEle.textContent = val;
    length = val;
}
slider();

// # Button Handler
const handlePassword = () => {
    let uppercaseEle = document.querySelector("input[name='pass-uppercase']"),
        numbersEle = document.querySelector("input[name='pass-numbers']"),
        symbolsEle = document.querySelector("input[name='pass-symbols']");

    if(uppercaseEle.checked){
        uppercase = true;
    }

    if(numbersEle.checked){
        numbers = true;
    }

    uppercaseEle.addEventListener("change", () => uppercaseEle.checked ? uppercase = true : uppercase = false)
    numbersEle.addEventListener("change", () => numbersEle.checked ? numbers = true : numbers = false)
    symbolsEle.addEventListener("change", () => symbolsEle.checked ? symbols = true : symbols = false)
    generatePassword(length, numbers, symbols, uppercase)
    passCopyBtn.classList.remove("hidden")
    passCopyBtn.classList.add("active");

    setTimeout(() => {
        passCopyBtn.classList.remove("active")
    }, 1000)

    passCopyBtn.addEventListener("click", () => {
        let btnIcon = passCopyBtn.querySelector("i");
        btnIcon.classList.remove("fa-copy")
        btnIcon.classList.add("fa-circle-check");
        navigator.clipboard.writeText(passText.innerHTML);

        setTimeout(() => {
            btnIcon.classList.remove("fa-circle-check");
            btnIcon.classList.add("fa-copy");
        }, 2000)
    })
}