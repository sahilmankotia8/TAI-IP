const inputBox = document.querySelector('.winput');
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('.wimg');
const temprature = document.querySelector('.wtemp');
const description = document.querySelector('.wdesc');
const humidity = document.querySelector('#humid');
const windSpeed = document.querySelector('#wspeed');
const notFound = document.querySelector('.not-found'); 
const weatherBody = document.querySelector('.wbody');


async function checkWeather(city){
    const apiKey = "73a87937151991350d0c9a535079f2ba";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(response => response.json()); 

    if(weatherData.cod === '404'){
        notFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log('error');
        return;
    }
    notFound.style.display = "none";
    weatherBody.style.display = "flex";

    temprature.innerHTML = `${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML =  `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;


    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src = "/images/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "/images/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "/images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "/images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "/images/snow.png";
            break;
    }

    console.log(weatherData)
}

if (searchBtn) {
    searchBtn.addEventListener('click',()=>{
      checkWeather(inputBox.value); 
    });
  }