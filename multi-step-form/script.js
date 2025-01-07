const stepsEle = document.querySelectorAll(".step-form"),
    prevStepBtn = document.querySelector(".prev-step-btn"),
    nextStepBtn = document.querySelector(".next-step-btn"),
    stepCountEle = document.querySelector(".step-count-txt");

let currentStepIndex = 0;
let isValid = true

showTab(currentStepIndex);

function showTab(num) {

    if (!isValid) {
        return false;
    }

    stepsEle[num].classList.add("active");

    if (num == 0) {
        prevStepBtn.style.display = "none";
    } else {
        prevStepBtn.style.display = "inline";
    }

    if (num == (stepsEle.length - 1)) {
        nextStepBtn.textContent = "Submit";
    } else {
        nextStepBtn.textContent = "Next Step";
    }

    if (num == 4) {
        prevStepBtn.style.display = "none";
        nextStepBtn.style.display = "none";
    }

    fixStepIndicator(num)
}

function nextStep(num) {
    if (!validateFields(currentStepIndex)) return;

    stepsEle[currentStepIndex].classList.remove("active");
    currentStepIndex += num;
    showTab(currentStepIndex);
    stepCountEle.textContent = currentStepIndex + 1;

    if (currentStepIndex === 4) {
        stepCountEle.textContent = 4;
    }
}

function prevStep(num) {
    stepsEle[currentStepIndex].classList.remove("active");
    currentStepIndex += num;
    showTab(currentStepIndex);
    stepCountEle.textContent = currentStepIndex + 1;
}

function fixStepIndicator(num) {
    var steps = document.getElementsByTagName("li");

    steps[0].classList.add("active", "active-progress");

    for (var i = 0; i < steps.length; i++) {
        if (i <= num) {
            steps[i].classList.add("active", "active-progress");
        } else {
            steps[i].classList.remove("active", "active-progress");
        }
    }
}

function validateFields(stepIndex) {
    let isValid = true;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // Validate fields based on the current step
    switch (stepIndex) {
        case 0:
            const firstname = document.querySelector("input[name='firstname']").value;
            const lastname = document.querySelector("input[name='lastname']").value;
            const contactNo = document.querySelector("input[name='contact-no']").value;
            const altContactNo = document.querySelector("input[name='alt-contact-no']").value;

            if (!firstname || firstname.length <= 3) {
                document.querySelector(".fname-err-txt").textContent = "First name must be more than 3 letters";
                isValid = false;
            }
            if (!lastname || lastname.length <= 3) {
                document.querySelector(".lname-err-txt").textContent = "Last name must be more than 3 letters";
                isValid = false;
            }
            if (!contactNo || !phoneRegex.test(contactNo)) {
                document.querySelector(".cono-err-txt").textContent = "Enter a valid 10-digit phone number";
                isValid = false;
            }
            if (!altContactNo || !phoneRegex.test(altContactNo)) {
                document.querySelector(".acono-err-txt").textContent = "Enter a valid 10-digit phone number";
                isValid = false;
            }
            break;

        case 1:
            const schoolName = document.querySelector("input[name='school-name']").value;
            const universityName = document.querySelector("input[name='university-name']").value;

            if (!schoolName || schoolName.length < 4) {
                document.querySelector(".sn-err-txt").textContent = "School name must be more than 3 letters";
                isValid = false;
            }
            if (!universityName || universityName.length < 4) {
                document.querySelector(".cu-err-txt").textContent = "University name must be more than 3 letters";
                isValid = false;
            }
            break;

        case 3:
            const email = document.querySelector("input[name='email']").value;
            const username = document.querySelector("input[name='username']").value;
            const password = document.querySelector("input[name='password']").value;
            const confirmPassword = document.querySelector("input[name='confirm-password']").value;

            if (!email || !emailRegex.test(email)) {
                document.querySelector(".email-err-txt").textContent = "Enter a valid email";
                isValid = false;
            }

            if (!username) {
                document.querySelector(".username-err-txt").textContent = "Enter username";
                isValid = false;
            }

            if (!password || passwordRegex.test(password)) {
                document.querySelector(".pass-err-txt").textContent = "Password must be 6 to 20 characters long with numeric, 1 lowercase and 1 uppercase letters";
                isValid = false;
            }

            if (!confirmPassword || confirmPassword !== password) {
                document.querySelector(".cpass-err-txt").textContent = "Enter confirm password which matches to password";
                isValid = false;
            }

        // Add additional cases for other steps as needed
        default:
            break;
    }

    return isValid;
}

