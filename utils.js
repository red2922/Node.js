function createRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

//This is using CommonJS module of exporting functions
module.exports = {
  createRandomNum,
  celciusToFahrenheit,
};
