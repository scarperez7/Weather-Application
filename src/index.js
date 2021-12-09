//Date

let date = document.querySelector("div.current-date");
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsay",
  "Friday",
  "Saturday",
];
let now = new Date();
let days = weekdays[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

date.innerHTML = ` ${days}, ${hour}:${minutes}`;

//Location and Temp

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let cityName = response.data.name;
  let h1 = document.querySelector("h1");
  let currentTemp = document.querySelector("#number");

  h1.innerHTML = `${cityName}`;
  currentTemp.innerHTML = `${temp}`;
}

function locateCity(place) {
  let city = document.querySelector("#city-search");
  let cityInput = city.value;
  let apiKey = "651edf040d549a2711ca409b8ff9c6f7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-form");
  let cityInput = city.value;
  locateCity(cityInput);
}

let newCity = document.querySelector("#search-city-form");
newCity.addEventListener("submit", citySearch);

debugger;
