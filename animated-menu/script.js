let menuBar = document.querySelector(".menu-bar"),
    closeMenuIcon = document.querySelector(".menu-wrapper i");

let tl = gsap.timeline()

tl.to(".menu-wrapper", {
    right: "0",
    duration: .5
})

tl.from(".menu-wrapper li", {
    x: 150,
    duration: .4,
    stagger: .28,
    opacity: 0
})

tl.from(".menu-wrapper i", {
    opacity: 0,
})

tl.pause();

menuBar.addEventListener("click", () => {
    tl.play()    
})

closeMenuIcon.addEventListener("click", () => {
    tl.reverse()
})

window.onclick = (event) => {
    if(event.target == document.querySelector("main")){
        tl.reverse()
    }
}

