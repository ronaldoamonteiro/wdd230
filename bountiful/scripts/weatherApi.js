const API_KEY = "38b41f27dd8d709a0363b3901b5696c8";
const API_KEY_2 = "38b41f27dd8d709a0363b3901b5696c8";
// Carlsbad coordinates
const LATITUDE = 33.158092;
const LONGITUDE = -117.3506;
const COUNTER = 3; // Number of forecast days

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;

const THREE_DAYS_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;

(async () => {
  // current weather api call
  const response = await fetch(WEATHER_API_URL);
  const data = await response.json();

  console.log({ data });

  const currentWeather = {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
  };

  // forecast weather api call

  const forecastResponse = await fetch(THREE_DAYS_FORECAST_URL);
  const { list } = await forecastResponse.json();

  console.log({ list });
  const forecastSet = new Set();

  // today's date
  const todayDate = new Date();
  console.log({
    todayDate: new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(todayDate),
  });

  // Sets today's date
  const todayDateSpan = document.getElementById("today-date");
  todayDateSpan.innerText = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(todayDate);

  const formattedDate = todayDate.toISOString().match(/\d+\-\d+-\d+/gm)[0];
  list.forEach((forecast) => {
    if (!forecast.dt_txt.includes(formattedDate)) {
      if (forecastSet.size === 0) {
        forecastSet.add({
          date: forecast.dt_txt.match(/\d+\-\d+-\d+/gm)[0],
          temperature: forecast.main.temp,
        });
      } else if (
        forecastSet.size > 0 &&
        forecastSet.size < 3 &&
        forecast.dt_txt.match(/\d+\-\d+-\d+/gm)[0] !==
          [...forecastSet][forecastSet.size - 1].date
      ) {
        forecastSet.add({
          date: forecast.dt_txt.match(/\d+\-\d+-\d+/gm)[0],
          temperature: forecast.main.temp,
        });
      }
    }
  });

  console.log("Set: ", forecastSet);

  // Sets the current weather data into the front-end spans
  const weatherDescriptionSpan = document.getElementById("weather-description");
  weatherDescriptionSpan.innerHTML = currentWeather.description;

  const currentTemperature = document.getElementById("current-temperature");
  currentTemperature.innerHTML = currentWeather.temperature;

  const currentHumidity = document.getElementById("current-humidity");
  currentHumidity.innerHTML = `${currentWeather.humidity}%`;

  [...forecastSet].forEach((forecast, index) => {
    const forecastDate = document.getElementById(`forecast-day-${index + 1}`);
    const temperatureForecast = document.getElementById(
      `forecast-temperature-${index + 1}`
    );
    forecastDate.innerHTML = forecast.date;
    temperatureForecast.innerHTML = forecast.temperature;
  });
})();