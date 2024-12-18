let counters = [
    {
        element: document.querySelector(".count1 h2"),
        count: 0,
        target: 500,
    },
    {
        element: document.querySelector(".count2 h2"),
        count: 0,
        target: 1120,
    },
    {
        element: document.querySelector(".count3 h2"),
        count: 0,
        target: 236,
    },
    {
        element: document.querySelector(".count4 h2"),
        count: 0,
        target: 780,
    },
];

let increment = setInterval(() => {
    let allCountersFinished = true;

    counters.forEach((counter) => {
        if (counter.count < counter.target) {
            counter.count++;
            counter.element.innerHTML = counter.count;
            allCountersFinished = false;
        }
    });

    if (allCountersFinished) {
        clearInterval(increment);
    }
}, 1);