let form = document.getElementById("palindrome-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let palindromeInput = document.querySelector(".palindrome-input"),
        statusMsge = document.querySelector(".status-msge");

    let palindromeValue = palindromeInput.value;

    if (palindromeValue) {
        let result = palindromeChecker(palindromeValue)
        console.log(result);

        if (result == true) {
            statusMsge.innerHTML = `Yes, <strong>${palindromeValue}</strong> is a palindrome!`;
        } else {
            statusMsge.innerHTML = `No, <strong>${palindromeValue}</strong> isn't a palindrome!`
        }
    }
})

function palindromeChecker(value) {
    let cleanedValue = value.replace(/\s+/g, '').toLowerCase();
    return cleanedValue == cleanedValue.toString().split("").reverse().join("").trim();
}