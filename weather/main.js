const button = document.querySelector('.button');

button.addEventListener('click', () => {

  const city = document.querySelector('.input').value;

  const APIKey = '3d81cd7f63ca4ce1b326b7b195ebdde5';

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



    console.log(data.name);
  })
});
