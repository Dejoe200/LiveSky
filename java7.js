script.js

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const result = document.getElementById("result");

const cities = {
  usa: ["New York", "Los Angeles", "Chicago"],
  spain: ["Madrid", "Barcelona", "Valencia"],
  germany: ["Berlin", "Munich", "Frankfurt"],
  uk: ["London", "Manchester", "Liverpool"]
};

// Populate cities when a country is chosen
countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  citySelect.innerHTML = "<option value=''>🏙️ Select City</option>";
  
  if (selectedCountry && cities[selectedCountry]) {
    cities[selectedCountry].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
});

// Fetch weather when button is clicked
console.log(data);
document.getElementById("checkWeather").addEventListener("click", async () => {
  const city = citySelect.value;
  
  if (!city) {
    result.textContent = "Please select a city.";
    return;
  }
  
  const apiKey = "e1344b8616a450e01a9fde2314d5f0b6"; // Replace with your OpenWeatherMap key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.cod === 200) {
      result.innerHTML = `
        <strong>${data.name}, ${data.sys.country}</strong><br>
        🌡️ Temperature: ${data.main.temp}°C<br>
        💧 Humidity: ${data.main.humidity}%<br>
        🌬️ Wind: ${data.wind.speed} m/s<br>
        🌤️ Weather: ${data.weather[0].description}
      `;
    } else {
      result.textContent = "City not found.";
    }
  } catch (error) {
    result.textContent = "Error fetching data. Please try again later.";
  }
});