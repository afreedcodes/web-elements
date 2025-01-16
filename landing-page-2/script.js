const section1 = () => {
    // # Header

    let tl = gsap.timeline();

    tl.from("#header-con h4, #header-con .nav, #header-con .s-links", {
        y: -30,
        duration: .4,
        delay: 0,
        stagger: .2,
        opacity: 0,
    })

    // # Hero section
    tl.from("#hero-con span, #hero-con h2, #hero-con p, #hero-con button", {
        y: 50,
        duration: 1,
        stagger: .2,
        opacity: 0,
        ease: "power1.out",
    })

    gsap.from("#hero-con .hero-image-wrapper", {
        x: 150,
        duration: .5,
        delay: 1.4,
        opacity: 0
    });
}

const section2 = () => {
    // # Story section
    let textEle = document.querySelector(".text p");

    console.log(textEle.innerText.split(""));

    textEle.innerHTML = textEle.innerText.split("").map((char, idx) => {
        return `<span style="transform: rotate(${idx * 11}deg)">${char}</span>`
    }).join("");

    gsap.from("#story-sec .img-1, #story-sec .img-2", {
        transform: "scale(.5)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#story-sec",
            scroller: "body",
            start: "top 40%"
        }
    })

    gsap.from("#story-sec .circle", {
        x: -200,
        transform: "rotate(-80deg)",
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#story-sec",
            scroller: "body",
            start: "top 40%"
        }
    })

    gsap.from("#story-sec .sub-heading, #story-sec .heading-2, #story-sec .p-text, #story-sec .iconbox-wrapper", {
        y: 50,
        duration: 1,
        stagger: .2,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#story-sec",
            scroller: "body",
            start: "top 40%"
        }
    })

    gsap.from("#impact-sec", {
        y: 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#story-sec",
            start: "top: 20%"
        }
    })
}

const section3 = () => {
    // # Portfolio section
    gsap.from("#projects-con .sub-heading, #projects-con, .heading-2 #projects-con p, #projects-con button", {
        y: 50,
        duration: 1,
        opacity: 0,
        stagger: .2,
        scrollTrigger: {
            trigger: "#projects-con",
            scroller: "body",
            start: "top 80%"
        }
    })

    gsap.from("#projects-sec .p-wrapper", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
            trigger: "#projects-con",
            scroller: "body",
            start: "top 80%"
        }
    })
    gsap.to("#projects-sec .p-wrapper", {
        transform: "translateX(-58%)",
        scrollTrigger: {
            duration: 10,
            ease: "power1.out",
            trigger: "#projects-sec",
            scroller: "body",
            markers: false,
            start: "top 0%",
            end: "top -200%",
            scrub: 2,
            pin: true
        }
    })
}

const section4 = () => {
    gsap.from("#blogs-sec .sub-heading, #blogs-sec, .heading-2 #blogs-sec p, #blogs-sec button, #blogs-sec .blogs-wrapper", {
        y: 50,
        duration: 1,
        opacity: 0,
        stagger: .2,
        scrollTrigger: {
            trigger: "#blogs-sec",
            scroller: "body",
            start: "top 50%"
        }
    })
}

const section5 = () => {
    gsap.from("#cta-sec button", {
        y: 50,
        duration: 1,
        opacity: 0,
        stagger: .2,
        scrollTrigger: {
            trigger: "#cta-sec",
            scroller: "body",
            start: "top 80%"
        }
    })
}

const section6 = () => {
    gsap.from("#footer .container", {
        y: 50,
        duration: 2,
        opacity: 0,
        stagger: .2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "body",
            start: "top 50%"
        }
    })
}

section1()
section2()
section3()
section4()
section5()
section6()