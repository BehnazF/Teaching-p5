//http://open-notify.org/Open-Notify-API/ISS-Location-Now/

var url = 'http://api.open-notify.org/iss-now.json';

var input;
var line_x = 100;
var weather;

var issX;
var issY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(askISS, 1000);

}

function askISS() {
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {

  console.log(data);
  weather = data;
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  // The numbers are in decimal degrees format and range from -90 to 90 for latitude and -180 to 180 for longitude
  issX = map(lat, -80, 80, 0, width);
  issY = map(long, -80, 90, 0, height);

  console.log(lat, long);
}

function draw() {
  background(0);

  if (weather) {
    fill(200, 0, 0);
    noStroke();
    ellipse(issX, issY, 20, 20);
    stroke(0, 0, 255);
    line(line_x, 0, line_x, height);
    line_x = line_x + 1;
    if (line_x > width) {
      line_x = 0;

    }
  }
}