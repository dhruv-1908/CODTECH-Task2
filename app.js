const apiKey = "b96f118df68fbef811f6731035936d1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "Km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = "images/default.png";
            break;
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
