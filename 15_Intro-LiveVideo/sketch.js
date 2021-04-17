
var video;
var button;
var snapPast = [];

function setup() {
  createCanvas(800, 240);
  background(0, 255, 255, 255);
  video = createCapture(VIDEO);
  video.size(width, 240);
  video.hide();
  button = createButton('snap!');
  // button.position(40, 540);
  button.mousePressed(takeSnape);
  pixelDensity(1);
}
function takeSnape() {
  tint(255, 0, 0);
  snapPast.push(video.get());
  image(video, 0, 0);
 
}

function draw() {
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = video.pixels[index+0]+y;
      pixels[index + 1] = video.pixels[index+1];
      pixels[index + 2] = video.pixels[index+1]+x;
      pixels[index + 3] = 255;

    }
  }
  updatePixels();

  
}