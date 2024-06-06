const convertToCelsius = function(tempF) {
  if (Number.isNaN(tempF)) {
    return "ERROR"
  }
  return Math.round((tempF - 32) * (5/9) * 10) / 10; 
};

const convertToFahrenheit = function(tempC) {
  if (Number.isNaN(tempC)) {
    return "ERROR"
  }
return Math.round((tempC * (9/5) + 32) * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
