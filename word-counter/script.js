let textareaEle = document.getElementById("paragraph-textarea"),
    characCountEle = document.querySelector(".character-count"),
    wordCountEle = document.querySelector(".word-count");

textareaEle.addEventListener("input", () => {
    characCountEle.textContent = textareaEle.value.length;
    let txt = textareaEle.value.trim();
    wordCountEle.textContent = txt.split(/\s+/).filter((item) => item).length;
})  