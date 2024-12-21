document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");

            // Get the filter category
            const filter = button.getAttribute("data-filter");

            // Filter galleryItems
            galleryItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    let lightboxContainerEle = document.querySelector(".modal-container"),
        lightboxImgEle = document.querySelector(".lightbox-img"),
        lightboxCloseBtn = document.querySelector(".modal .fa-xmark");

    let bodyEle = document.getElementsByTagName("body")[0];

    window.onload = () => {
        for (let i = 0; i < galleryItems.length; i++) {
            // totalImgCountEle.textContent = galleryItems.length;
            let newIndex = i;
            let clickedImgIndex;

            galleryItems[i].onclick = () => {
                clickedImgIndex = newIndex;
                // console.log(i);

                function preview() {
                    // currentImgCountEle.textContent = newIndex + 1;
                    let selectedImgSrc = galleryItems[newIndex].querySelector("img").src;
                    lightboxImgEle.src = selectedImgSrc
                }

                const prevBtn = document.querySelector(".prev-btn");
                const nextBtn = document.querySelector(".next-btn");

                prevBtn.onclick = () => {
                    newIndex--;
                    if (newIndex == 0) {
                        preview();
                        prevBtn.style.display = "none";
                    } else {
                        preview();
                        nextBtn.style.display = "block";
                    }
                };

                nextBtn.onclick = () => {
                    newIndex++;
                    if (newIndex >= galleryItems.length - 1) {
                        preview();
                        nextBtn.style.display = "none";
                    } else {
                        preview();
                        prevBtn.style.display = "block";
                    }
                };

                preview();
                lightboxContainerEle.classList.add("active");
                bodyEle.style.overflow = "hidden"
                setTimeout(() => {
                    lightboxCloseBtn.style.display = "block"
                }, 600)
            }
        }

        lightboxCloseBtn.onclick = () => {
            lightboxContainerEle.classList.remove("active")
            lightboxCloseBtn.style.display = "none"
            bodyEle.style.overflow = "auto"
        }
    }

    window.onclick = (event) => {
        if (event.target == lightboxContainerEle) {
            lightboxContainerEle.classList.remove("active");
            lightboxCloseBtn.style.display = "none"
            bodyEle.style.overflow = "auto"
        }
    }
});

