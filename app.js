const img = document.querySelector("img");
const button = document.querySelector("button");
const inputText = document.querySelector("#city");
const cityOutput = document.querySelector("#cityTitle");

let city = "";

async function getWeather(cityInput) {
  try {
    const response = await fetch(
      `  http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=a4a0dc6c4302e95bac6ab763510e5bfb&units=imperial`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    if (weatherData.cod == "400") {
      console.log("Please enter a city name");
    } else if (weatherData.cod == "404") {
      console.log("please enter a valid city name");
    }
    console.log(weatherData);
    cityOutput.innerHTML = weatherData.name;
    const newWeatherObj = new weatherObject(
      weatherData.name,
      weatherData.main.temp,
      weatherData.main.feels_like
    );
    console.log(newWeatherObj);
  } catch (error) {
    alert("error");
  }
}

window.onload = getWeather("Chicago");

inputText.addEventListener("change", function onSelect(e) {
  city = inputText.value;
});

button.addEventListener("click", (e) => {
  getWeather(city);
});

class weatherObject {
  constructor(cityName, tempF, tempFeels) {
    this.name = cityName;
    this.tempF = tempF;
    this.tempFeels = tempFeels;
  }
}
