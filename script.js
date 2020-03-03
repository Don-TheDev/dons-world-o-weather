const weather_of_day_0 = document.getElementById('weather_of_day_0');
const temp_of_day_0 = document.getElementById('temp_of_day_0');
const weather_of_day_1 = document.getElementById('weather_of_day_1');
const temp_of_day_1 = document.getElementById('temp_of_day_1');

let api = 'e2a7eb8fb47f6546ba6b8d79c8e4d9cd';
let city = 'Salt Lake City, UT';
let country = 'US';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    weather_of_day_0.innerHTML = data.list[0].weather[0].description;
    temp_of_day_0.innerHTML = data.list[0].main.temp + ' &deg;F';

    weather_of_day_1.innerHTML = data.list[8].weather[0].description;
    temp_of_day_1.innerHTML = data.list[8].main.temp + ' &deg;F';

    weather_of_day_2.innerHTML = data.list[16].weather[0].description;
    temp_of_day_2.innerHTML = data.list[16].main.temp + ' &deg;F';

    weather_of_day_3.innerHTML = data.list[24].weather[0].description;
    temp_of_day_3.innerHTML = data.list[24].main.temp + ' &deg;F';

    weather_of_day_4.innerHTML = data.list[32].weather[0].description;
    temp_of_day_4.innerHTML = data.list[32].main.temp + ' &deg;F';
})
  .catch(e => console.log(e));