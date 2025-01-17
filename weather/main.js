const button = document.querySelector('.button');
const APIKey = '3d81cd7f63ca4ce1b326b7b195ebdde5';

button.addEventListener('click', () => {
  const city = document.querySelector('.input').value;
  fetchWeather(city);
  });


  const fetchWeather = (city) => {
  if (city === '') {
    return
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
  .then(response => response.json())


  .then(data => {
    const cityName = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const description = document.querySelector('.descr');
    const pressure = document.querySelector('.pressure');
    const windSpeed = document.querySelector('.wind-speed');
    const windDeg = document.querySelector('.wind')
    const icon = document.querySelector('.icon');

    cityName.textContent = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
    description.textContent = data.weather[0].description;
    pressure.textContent = data.main.pressure;
    windSpeed.innerHTML = `${data.wind.speed} <span>meter/sec</span>`;
    windDeg.innerHTML = `${data.wind.deg}<span>°</span>`;
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`
  })
};

// Automatically fetch weather based on IP geolocation
const fetchGeoLocation = () => {
  fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const city = data.city;
    if (city) {
      fetchWeather(city)
    } else {
      console.error('Could not determine location');
    }
  })
  .catch(error => console.error('Error fetching geolocation:', error));
};

window.onload = fetchGeoLocation;
