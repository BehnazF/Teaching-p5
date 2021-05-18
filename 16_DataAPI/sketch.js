//https://openweathermap.org/api

var weather;

function setup() {
  createCanvas(200, 300);
  //you will have to insert your API Key and city name yourself in the following line
  loadJSON('pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}', gotData)
}

function gotData(data) {
  console.log(data);
  weather = data;
}

function draw() {
  background(0);

  if (weather) {
    fill(100 * weather.main.temp, 0, 0);
    ellipse(50, 50, weather.wind.speed, weather.wind.speed);

  }
}