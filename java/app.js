let now = new Date();
let time = now.getHours();
let minutes = now.getMinutes();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];
document.getElementById("datetime").innerHTML =
    day + " " + time + ":" + minutes;
//

function displayWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
}

function searchCity(city) {
    let apiKey = "1d1742d71e2e4296840a997a3c66e304";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input-form").value;
    searchCity(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayWeatherCondition(response) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}°C`;
}
function searchLocation(position) {
    let apiKey = "1d1742d71e2e4296840a997a3c66e304";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}
document
    .getElementById("current-location-button")
    .addEventListener("click", getCurrentLocation);
