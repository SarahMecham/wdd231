const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const myKey = 'ddc4dcc33b1bba3709346d0e677f41a7';
const lat = '49.74973';
const lon = '6.63632';
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
            
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
    caption.textContent = `${desc}`;

}

apiFetch();