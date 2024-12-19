let quote = document.querySelector(".quote"),
    authorName = document.querySelector(".name"),
    quoteGenBtn = document.getElementById("quote-gen-btn");

const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '44660c258bmsh29b6fa3a4a88cfcp1baedfjsn8fc56a78f083',
        'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com'
    }
};

const quoteGenerator = async () => {
    try {
        quoteGenBtn.textContent = "Loading..."

        await fetch(url, options).then(async (response) => {
            const result = await response.json();
            let quoteData = result[0];

            quote.textContent = quoteData.Quote
            authorName.textContent = quoteData.Author
            quoteGenBtn.textContent = "New Quote"
        })
    } catch (error) {
        console.log(error);
    }
}

const quoteSpeak = () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance)
}

const quoteCopyText = () => {
    navigator.clipboard.writeText(quote.innerText)
}