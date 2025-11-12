export async function loadCurrentWeather(lat, lon, apiKey) {
    const temp = document.querySelector('#current-temp');
    const icon = document.querySelector('#weather-icon');
    const caption = document.querySelector('#weather-desc');
    const details = document.querySelector('#weather-details');

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    //Fetch and await response
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        console.log("Current Weather Data:", data);
        displayResults(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }

    //Display current weather
    function displayResults(data) {
        if (!data || !data.main || !data.weather || !data.sys) {
            console.error("Incomplete data:", data);
            return;
        }

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const desc = data.weather[0].description || "No description available.";

        icon.src = iconsrc;
        icon.alt = desc;
        temp.innerHTML = `${Number(data.main.temp).toFixed(0)}&deg;F`;
        caption.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);

        const tempMax = Number(data.main.temp_max);
        const tempMin = Number(data.main.temp_min);
        const humidity = Number(data.main.humidity);

        const timezoneOffset = data.timezone || 0;
        const sunriseUnix = data.sys?.sunrise;
        const sunsetUnix = data.sys?.sunset;

        //Change time to readable time in correct timezone
        const formatTime = (unix) => {
            const localMs = (unix + timezoneOffset) * 1000;
            return new Date(localMs).toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'UTC'
            });
        };

        const sunriseTime = sunriseUnix ? formatTime(sunriseUnix) : "N/A";
        const sunsetTime = sunsetUnix ? formatTime(sunsetUnix) : "N/A";

        details.innerHTML = `
            <p>High: ${!isNaN(tempMax) ? tempMax.toFixed(0) : "N/A"}&deg;F</p>
            <p>Low: ${!isNaN(tempMin) ? tempMin.toFixed(0) : "N/A"}&deg;F</p>
            <p>Humidity: ${!isNaN(humidity) ? humidity : "N/A"}%</p>
            <p>Sunrise: ${sunriseTime}</p>
            <p>Sunset: ${sunsetTime}</p>
        `;
    }
}
