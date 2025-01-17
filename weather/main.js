const button = document.querySelector('.button');

button.addEventListener('click', () => {

  const city = document.querySelector('.input').value;

  if (city === '') {
    return
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3d81cd7f63ca4ce1b326b7b195ebdde5`)
  .then(response => response.json())
  .then(data => {
    const cityName = document.querySelector('.city');
    
    cityName.textContent = data.name;

    console.log(data.name);
  })
});
