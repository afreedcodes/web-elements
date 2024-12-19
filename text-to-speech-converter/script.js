let form = document.getElementsByTagName("form")[0],
    button = form.getElementsByTagName("button")[0];
let isSpeaking = true

const textToSpeech = () => {

    let textarea = document.getElementById("text");

    let synth = window.speechSynthesis;
    let text = textarea.value;

    if (!synth.speaking && text) {
        let utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance)
    }

    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        } else {
            button.innerText = "Resume";
            synth.pause();
            isSpeaking = true
        }
    } else {
        isSpeaking = false;
        button.innerText = "Speaking";
    }

    setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            button.innerText = "Convert to speach"
        }
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    textToSpeech()
})