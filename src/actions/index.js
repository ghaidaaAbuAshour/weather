import axios from 'axios';

const API_KEY='71492dff437864d5435ae1b681e7afd7';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export function fetchWeather(city)
{
const url=`${ROOT_URL}&q=${city},us`;
const request = axios.get(url);

console.log("request");
console.log(request);


return {
type:'FETCH_WEATHER',
payload : request
};
}
