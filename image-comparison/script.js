let slider = document.querySelector(".image-comparison-slider"),
    sliderImgWrapper = document.querySelector(
        ".image-comparison-slider .image-wrapper"
    );
sliderHandle = document.querySelector(".image-comparison-slider .handle");

slider.addEventListener("mousemove", slideMouseMove);

function slideMouseMove(event) {
    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const sliderHandleWidth = sliderHandle.clientWidth;

    let mouseX = event.clientX - sliderLeftX;

    if (mouseX < 0) mouseX = 0;
    else if (mouseX > sliderWidth) mouseX = sliderWidth;

    sliderImgWrapper.style.width = `${(
        (1 - mouseX / sliderWidth) *
        100
    ).toFixed(4)}%`;
    sliderHandle.style.left = `calc(${(
        (mouseX / sliderWidth) *
        100
    ).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;
}