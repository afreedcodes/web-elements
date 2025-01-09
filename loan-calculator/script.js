let loanCalcFormEle = document.getElementById("loan-calc-form");

loanCalcFormEle.addEventListener("submit", (e) => {
    e.preventDefault();

    let loanAmtInput = document.querySelector("input[name='loan-amt']").value,
        interestRateInput = document.querySelector("input[name='interest-rate']").value,
        loanTermInput = document.querySelector("input[name='loan-term']").value;

    let totalLoanAmt = parseInt(loanAmtInput) / 100 * parseInt(interestRateInput) + parseInt(loanAmtInput);
    let calcEmaAmt = totalLoanAmt / loanTermInput;

    document.querySelector(".emi-txt").textContent = calcEmaAmt.toFixed(2);
    document.querySelector(".total-loan-txt").textContent = parseInt(totalLoanAmt);
})