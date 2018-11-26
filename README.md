# Moody Weather
Live demo: [https://angry-leakey-e80d2d.netlify.com/](https://angry-leakey-e80d2d.netlify.com/)

Simple React Weather App built with styled components.


- weather data is fetched from [OpenWeatherMap API](https://openweathermap.org/) using Fetch API (axios seemed a bit overkill for the task)
- ability to find user's location using Geolocation API
- background images based on weather condition
- pinned location loads automatically on page visit
- shows sunrise and sunset times in the location's timezone  thanks to the custom `sys.timezone` json field injected in the backend [moody-weather-api](https://github.com/slowbackspace/moody-weather-api). 

![Screenshot](screenshot.png)