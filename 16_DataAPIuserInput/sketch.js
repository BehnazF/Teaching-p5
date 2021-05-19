//https://openweathermap.org/api

var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Tehran';
var apiKey = '&appid=99e7669684bb8b978063d702c9c9e34f';
var units = '&units=metric';
var input;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //you will have to insert your API Key and city name yourself in the following line
  var buttom = select('#submit');
  buttom.mousePressed(weatherAsk);
  input = select('#city');

}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  console.log(data);
  weather = data;
}

function draw() {
  background(0);

  if (weather) {
    var col = map(weather.main.temp, 0, 40, 0, 255);
    // console.log(col);
    text("temperture=" + weather.main.temp, 10, 20);
    text("humidity=" + weather.main.humidity, 10, 30);
    fill(col, weather.main.humidity, 0);
    ellipse(200, 200, weather.main.temp, weather.main.temp);

  }
}