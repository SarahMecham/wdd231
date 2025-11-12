export async function loadFutureWeather(lat, lon, apiKey) {
    const threeDay = document.querySelector("#three-day");

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        console.log("Forecast Data:", data);
        displayForecast(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }

    function displayForecast(data) {
        threeDay.innerHTML = ""; 

        // Get today's date
        const today = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // The next 3 days including today
        const nextThreeDays = [];
        for (let i = 0; i < 3; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            nextThreeDays.push(date);
        }

        // Filter forecasts closest to midday for each day
        nextThreeDays.forEach(date => {
            // Find forecast closest to 12:00 for this day
            const forecastForDay = data.list.reduce((closest, item) => {
                const itemDate = new Date(item.dt * 1000);
                if (itemDate.getDate() === date.getDate()) {
                    const diff = Math.abs(itemDate.getHours() - 12);
                    if (!closest || diff < closest.diff) {
                        return { item, diff };
                    }
                }
                return closest;
            }, null);

            if (forecastForDay) {
                const dayLabel = (date.getDate() === today.getDate()) ? "Today" : dayNames[date.getDay()];
                const temp = `${Math.round(forecastForDay.item.main.temp)}°F`;
                threeDay.innerHTML += `<p>${dayLabel}: <span>${temp}</span></p>`;
            }
        });
    }
}
