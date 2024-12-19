let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function calcOperation() {
    try {
        display.value = eval(display.value)
    } catch (err) {
        display.value = "Error"
    }
}

function deletePrev() {
    display.value = display.value.slice(0, -1);
}