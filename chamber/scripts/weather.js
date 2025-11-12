const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('#weather-desc');
const details = document.querySelector('#weather-details');

//Define key data from weather API
const myKey = 'ddc4dcc33b1bba3709346d0e677f41a7';
const lat = '40.56';
const lon = '-112.01';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`

//Get data from weather API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("API data:", data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
            
        }
    } catch (error) {
        console.log("Fetch error:", error);
    }
}


//Display data from current weather API
function displayResults(data) {
    if(!data || !data.main || !data.weather || !data.sys) {
        console.error("Incomplete data:", data);
        return;
    }

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description || "No description available.";

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    temp.innerHTML = `${Number(data.main.temp).toFixed(0)}&deg;F`;
    caption.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);

    const tempMax = Number(data.main.temp_max);
    const tempMin = Number(data.main.temp_min);
    const humidity = Number(data.main.humidity);

    const timezoneOffset = data.timezone || 0; 
    const sunriseUnix = data.sys?.sunrise;
    const sunsetUnix = data.sys?.sunset;
  
    let sunriseTime = "N/A";
    let sunsetTime = "N/A";

    if (sunriseUnix) {
        //UTC timestamp offset by local timezone
        const localSunriseMs = (sunriseUnix + timezoneOffset) * 1000;
        //Format for UTC so browser doesn't reinterpret timezone creating inaccurate times.
        sunriseTime = new Date(localSunriseMs).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC'
        });
    }

    if (sunsetUnix) {
        const localSunsetMs = (sunsetUnix + timezoneOffset) * 1000;
        sunsetTime = new Date(localSunsetMs).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC'
        });
    }

    details.innerHTML = `
    <p>High: ${!isNaN(tempMax) ? tempMax.toFixed(0) : "N/A"}&deg;F</p>
    <p>Low: ${!isNaN(tempMin) ? tempMin.toFixed(0) : "N/A"}&deg;F</p>
    <p>Humidity: ${!isNaN(humidity) ? humidity : "N/A"}%</p>
    <p>Sunrise: ${sunriseTime}</p>
    <p>Sunset: ${sunsetTime}</p>
    `;
}

apiFetch();