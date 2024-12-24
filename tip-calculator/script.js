function myFunc() {
    let bill = parseFloat(document.getElementById('bill-amount').value) || 0;
    let tipPerc = parseFloat(document.getElementById('tip-perc').value) || 0;
    let person = parseFloat(document.getElementById('person').value) || 1;

    let tip = (bill / 100) * tipPerc / person;

    let totalBill = (bill / person) + tip;

    // Display the tip and total amounts in the respective spans
    document.querySelector('.tip-amt').textContent = "₹" + tip.toFixed(2);
    document.querySelector('.total-amt').textContent = "₹" + totalBill.toFixed(2);
}

function updateTipPercentage(percentage) {
    document.getElementById('tip-perc').value = percentage;
    myFunc();
}

function handleReset() {
    window.location.reload()
}

