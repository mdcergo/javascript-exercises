const convertToCelsius = function(fahrenheit) {
  celcius = ((fahrenheit - 32) * (5/9))
  return temperature = parseFloat(celcius.toFixed(1))
};

const convertToFahrenheit = function(celcius) {
  fahrenheit = ((celcius * (9/5)) + 32)
  return temperature = parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
