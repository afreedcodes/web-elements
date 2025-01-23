let tabs = document.querySelector(".tabs-container");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        // Calculate the left position for the tab-indicator
        let tabWidth = tabHeaderNodes[i].offsetWidth;
        let leftPosition = tabHeaderNodes[i].offsetLeft + (tabWidth - tabIndicator.offsetWidth) / 2;
        tabIndicator.style.left = `${leftPosition}px`;
    });
}