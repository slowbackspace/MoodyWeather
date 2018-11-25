export const kelvinToCelsius = (kelvin) => {
  return (parseFloat(kelvin) - 273.15);
}

export const kelvinToFahrenheit = (kelvin) => {
  return (parseFloat(kelvin) * 9/5) - 459.67;
}