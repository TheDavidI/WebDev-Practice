const temperature = require("./temperature2");

const celsius = 25;
const fahrenheit = 77;

const ToFahrenheit = temperature.celsiusToFahrenheit(celsius);
const ToCelsius = temperature.fahrenheitToCelsius(fahrenheit);

console.log(`${celsius}°C е равно на ${ToFahrenheit}°F`);
console.log(`${fahrenheit}°F е равно на ${ToCelsius.toFixed(0)}°C`);