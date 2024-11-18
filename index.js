const apikey = "12f2ebab3a1b7ebf6d5fde55e29fe609";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const suggestionsEl = document.getElementById("suggestions");
const formEl = document.querySelector("form");
const loaderEl = document.getElementById("loader");
const citiesList = [
  "Boston, US",
  "New York, US",
  "Los Angeles, US",
  "London, GB",
  "Paris, FR",
  "Berlin, DE",
  "Tokyo, JP",
  "Sydney, AU",
  "Mumbai, IN",
  "Delhi, IN",
];
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundImage = "url('images/default.jpg')";
});
async function getWeatherData(cityValue) {
  showLoader(true);
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${apikey}&query=${cityValue}`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.info);
    }
    displayWeatherData(data);
  } catch (error) {
    displayError("City not found. Please try again.");
  } finally {
    showLoader(false);
  }
}
function displayWeatherData(data) {
  const temperature = data.current.temperature;
  const description = data.current.weather_descriptions[0];
  const icon = data.current.weather_icons[0];
  const details = [
    `Feels like: ${data.current.feelslike}°C`,
    `Humidity: ${data.current.humidity}%`,
    `Wind speed: ${data.current.wind_speed} km/h`,
  ];
  document.body.style.backgroundImage = getBackgroundImage(description);
  weatherDataEl.querySelector(".icon").innerHTML = `
    <img src="${icon}" alt="Weather Icon">`;
  weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
  weatherDataEl.querySelector(".description").textContent = description;
  weatherDataEl.querySelector(".details").innerHTML = details
    .map((detail) => `<div>${detail}</div>`)
    .join("");
}
function displayError(message) {
  weatherDataEl.querySelector(".icon").innerHTML = "";
  weatherDataEl.querySelector(".temperature").textContent = "";
  weatherDataEl.querySelector(".description").textContent = message;
  weatherDataEl.querySelector(".details").innerHTML = "";
  document.body.style.backgroundImage = "url('images/default.jpg')";
}
function getBackgroundImage(weatherDescription) {
  const backgrounds = {
    Clear: "url('images/clear.jpg')",
    Sunny: "url('images/clear.jpg')",
    Cloudy: "url('images/clouds.jpg')",
    Overcast: "url('images/clouds.jpg')",
    Rain: "url('images/rain.jpg')",
    Showers: "url('images/rain.jpg')",
    Snow: "url('images/snow.jpg')",
    Thunderstorm: "url('images/thunderstorm.jpg')",
    Drizzle: "url('images/drizzle.jpg')",
    default: "url('images/default.jpg')",
  };
  return backgrounds[weatherDescription] || backgrounds.default;
}
function showLoader(show) {
  loaderEl.classList.toggle("hidden", !show);
}
function fetchCitySuggestions(query) {
  if (!query) {
    suggestionsEl.innerHTML = "";
    suggestionsEl.classList.add("hidden");
    return;
  }
  const matches = citiesList.filter((city) =>
    city.toLowerCase().startsWith(query.toLowerCase())
  );
  if (matches.length > 0) {
    displaySuggestions(matches);
  } else {
    suggestionsEl.innerHTML = "<div>No matches found</div>";
    suggestionsEl.classList.remove("hidden");
  }
}
function displaySuggestions(cities) {
  const suggestionsHTML = cities
    .map(
      (city) =>
        `<div class="suggestion" data-city="${city}">${city}</div>`
    )
    .join("");
  suggestionsEl.innerHTML = suggestionsHTML;
  suggestionsEl.classList.remove("hidden");
  document.querySelectorAll(".suggestion").forEach((item) => {
    item.addEventListener("click", (e) => {
      const selectedCity = e.target.dataset.city;
      cityInputEl.value = selectedCity;
      suggestionsEl.classList.add("hidden"); 
    });
  });
}
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value.trim();
  if (cityValue) {
    getWeatherData(cityValue);
  }
});
cityInputEl.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  fetchCitySuggestions(query);
});