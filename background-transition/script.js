let body = document.getElementsByTagName('body')[0]
window.addEventListener('scroll', () => {
    let scrollFromTop = window.pageYOffset;

    if (scrollFromTop < 300) {
        body.style.background = "#dee4ef";
    } else if (scrollFromTop > 2800) {
        body.style.background = "#1a1a1a";
    } else if (scrollFromTop > 1900) {
        body.style.background = "#ea9990";
    } else if (scrollFromTop > 1300) {
        body.style.background = "#80D38E";
    } else if (scrollFromTop > 1000) {
        body.style.background = "#69CAEC";
    } else if (scrollFromTop > 500) {
        body.style.background = "#7e5ae0";
    } else if (scrollFromTop > 300) {
        body.style.background = "#859d92";
    }

    if (scrollFromTop > 2300) {
        let croissantImg = document.querySelector('.croissant-img').classList.add("croissant-active")
    } else if (scrollFromTop > 1700) {
        let pizzaImg = document.querySelector('.pizza-img').classList.add("pizza-active")
    } else if (scrollFromTop > 1000) {
        let bcImg = document.querySelector('.bc-img').classList.add("bc-active")
    } else if (scrollFromTop > 300) {
        let tacoImg = document.querySelector('.taco-img').classList.add("taco-active")
    }

    // console.log(scrollFromTop)
})