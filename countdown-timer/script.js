let setDate = '01 January 2025 12:00 AM'

function timer() {
    let endDate = new Date(setDate);
    let currDate = new Date();
    let diff = (endDate - currDate) / 1000;

    // if(diff < 0)return;
    // console.log(endDate - currDate)

    // console.log(Math.floor(diff/3600/24))

    // console.log(Math.floor(diff / 3600) % 24)

    // console.log(Math.floor(diff / 60) % 60)

    // console.log(Math.floor(diff) % 3600)

    let days = document.querySelector('.days');
    days.textContent = Math.floor(diff / 3600 / 24)

    let hours = document.querySelector('.hours')
    hours.textContent = Math.floor(diff / 3600) % 24;

    let minutes = document.querySelector('.minutes')
    minutes.textContent = Math.floor(diff / 60) % 60;

    let seconds = document.querySelector('.seconds')
    seconds.textContent = Math.floor(diff) % 60;

    if (diff < 0) {
        days.textContent = '0';
        hours.textContent = '0';
        minutes.textContent = '0';
        seconds.textContent = '0';
    }

}

timer()

setInterval(function () {
    timer()
}, 1000)

/*
1 day = 24 hours
1 hours = 60 minutes
60 minutes = 3600 seconds
*/