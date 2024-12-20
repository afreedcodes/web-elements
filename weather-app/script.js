document.addEventListener("DOMContentLoaded", () => {
    let weatherDataEle = document.querySelector(".weather-data-wrapper"),
        errorTxt = document.querySelector(".error-txt");

    window.handleBtnClick = () => {
        let inputEle = document.getElementById("city-name");

        fetchWeatherData(inputEle.value)
        inputEle.value = "";
    }

    const fetchWeatherData = async (cityName) => {
        try {
            let id = '9505fd1df737e20152fbd78cdb289b6a';
            let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

            try {
                await fetch(url + '&q=' + cityName)
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);

                        if (data.cod == 200) {
                            return weatherDataEle.innerHTML = `
                    <h2 class="flex items-center gap-2 text-lg font-bold">
                    ${data.name}
                    <span>
                        <img class="w-6" src="https://flagsapi.com/${data.sys.country}/shiny/32.png" alt="">
                    </span>
                    </h2>

                    <figure class="temperature flex flex-col justify-center items-center">
                        <img class="drop-shadow-2xl" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
                        <figcaption class="text-3xl font-semibold">
                            <span>${data.main.temp}</span>
                            <sup>o</sup>
                        </figcaption>
                    </figure>
                    <p class="capitalize">${data.weather[0].description}</p>
                    <ul class="w-full mt-6 flex justify-center items-center gap-4 capitalize">
                        <li class="h-40 w-full flex flex-col justify-evenly items-center bg-[#dee4ef] border-b-4 border-primary to-white rounded-2xl">
                            <span class="font-semibold">clouds</span>
                            <i class="fa-solid fa-cloud text-lg text-gray-600"></i>
                            <span id="clouds">${data.clouds.all}%</span>
                        </li>
                        <li class="h-40 w-full flex flex-col justify-evenly items-center bg-[#dee4ef] border-b-4 border-primary to-white rounded-2xl">
                            <span class="font-semibold">humidity</span>
                            <i class="fa-solid fa-droplet text-lg text-gray-600"></i>
                            <span id="humidity">${data.main.humidity}%</span>
                        </li>
                        <li class="h-40 w-full flex flex-col justify-evenly items-center bg-[#dee4ef] border-b-4 border-primary to-white rounded-2xl">
                            <span class="font-semibold">pressure</span>
                            <i class="fa-solid fa-gauge text-lg text-gray-600"></i>
                            <span id="pressure">${data.main.pressure} hpa</span>
                        </li>
                    </ul>
                    `
                        }else{
                            errorTxt.textContent = "Data couldn't fetch, plaese try it later"
                        }
                    })
            } catch (error) {
                console.error(error);
                errorTxt.textContent = "Data couldn't fetch, plaese try it later"
            }

        } catch (error) {
            console.error(error);
        }
    }

})