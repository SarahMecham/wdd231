import { loadCurrentWeather } from "./current.mjs";
import { loadFutureWeather } from "./forecast.mjs";

const myKey = 'ddc4dcc33b1bba3709346d0e677f41a7';
const lat = '40.56';
const lon = '-111.93';

loadCurrentWeather(lat, lon, myKey);
loadFutureWeather(lat, lon, myKey);

