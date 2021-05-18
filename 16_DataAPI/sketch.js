//https://openweathermap.org/api

var weather;

function setup() {
  createCanvas(200, 300);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=99e7669684bb8b978063d702c9c9e34f&units=metric', gotData)
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