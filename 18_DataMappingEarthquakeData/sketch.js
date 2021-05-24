//https://www.youtube.com/watch?v=ZiYdOwOrGyc&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=11
//map is from https://docs.mapbox.com/help/glossary/static-images-api/
//data is from https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php

var mapImg;

var clat = 0;
var clong = 0;

//Barcelona: 41.3851° N, 2.1734° E
var lat = 41.3851;
var long = 2.1734;

var zoom = 1;

var earthquackes;
function preload() {
  mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYmVobmF6ZmFyYWhpIiwiYSI6ImNrb3czanBlYjAxeXEydmxkanRkZ3c4ejgifQ.doYqdFnYgJwQRfnYnvayuQ');
  earthquackes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv')
}

function mercX(long) {
  long = radians(long);
  var a = (256 / PI) * pow(2, zoom);
  var b = long + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {

  createCanvas(1042, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapImg, 0, 0);
  var cx = mercX(clong);
  var cy = mercY(clat);

  for (var i = 0; i < earthquackes.length; i++) {
    var data = earthquackes[i].split(/,/);
    // console.log(data);
    var lat = data[1];
    var long = data[2];
    var rad = data[4] * 1.7;
    var x = mercX(long) - cx;
    var y = mercY(lat) - cy;

    fill(255, 0, 0, 100);
    ellipse(x, y, rad, rad);
  }


}


function draw() {

}