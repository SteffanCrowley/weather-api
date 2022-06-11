const img = document.querySelector("img");
const button = document.querySelector("button");
const inputText = document.querySelector("#city");
const cityOutput = document.querySelector("#cityTitle");

let city = "";

async function getWeather(cityInput) {
  const response = await fetch(
    `  http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=a4a0dc6c4302e95bac6ab763510e5bfb`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  cityOutput.innerHTML = weatherData.name;
  const newWeather = new weatherObject(
    weatherData.name,
    weatherData.main.temp,
    weatherData.main.temp
  );
  console.log(newWeather);
}

window.onload = getWeather("Chicago");

inputText.addEventListener("change", function onSelect(e) {
  city = inputText.value;
});

button.addEventListener("click", (e) => {
  getWeather(city);
});

class weatherObject {
  constructor(cityName, tempF, tempC) {
    this.name = cityName;
    this.tempF = tempF;
    this.tempC = tempC;
  }
}
