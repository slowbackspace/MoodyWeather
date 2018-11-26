import { parseCoordinates } from "./textUtils";
//import { API_KEY } from "../config";

const BASEURL = "https://moody-weather.myrbium.com/v1/weather/";
export const fetchWeather = (location, lang = "en") => {
  return fetch(BASEURL + location).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  });
};

// const APIKEY = API_KEY;

// export const fetchWeather = (location, lang="en") => {
//   const coords = parseCoordinates(location);

//   let url = "";
//   if (coords) {
//     // lat, lon search query
//     const [latitude, longitude] = coords;
//     url = `${BASEURL}?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`;
//   } else {
//     // city name
//     url = `${BASEURL}?q=${location}&APPID=${APIKEY}`;
//   }

//   url += "&lang=" + lang;

//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw response;
//     }
//   })
// }
