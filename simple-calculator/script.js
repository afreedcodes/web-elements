let display = document.getElementById("display"),
      buttons = document.querySelectorAll("span");

    const specialChar = ["%", "*", "/", "-", "+", "="];
    let output = "";

    function calculateValues(btnValue) {
      display.focus();
      if (btnValue === "=" && output !== "") {
        //If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
      } else if (btnValue === "AC") {
        output = "";
      } else if (btnValue === "DEL") {
        //If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
      } else {
        //If output is empty and button is specialChars then return
        if (output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
      }

      display.value = output
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        calculateValues(e.target.dataset.value);
      })
    })