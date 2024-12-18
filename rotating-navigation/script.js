let section = document.querySelector(".rn-sec"), navWrapper = document.querySelector(".nav-btn"), bodyTag = document.getElementsByTagName("body")[0];

const handleNavShow = () => {
    section.classList.add("active");
    navWrapper.classList.add("active");
    bodyTag.style.overflowX = "hidden";
}

const handleNavClose = () => {
    section.classList.remove("active");
    navWrapper.classList.remove("active");
    setTimeout(() => {
        bodyTag.style.overflowX = "auto"
    }, 1000)
}