let cardsEle = document.querySelectorAll(".item");

cardsEle.forEach((item) => {
    item.addEventListener("click", () => {
        cardsEle.forEach((item) => {
            item.classList.remove("active")
        })
        
        item.classList.add("active")

    })
})