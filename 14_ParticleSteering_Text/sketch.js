let myFont;
let points;
var particle_X= [];
let slider;

function preload() {
  myFont = loadFont('RobotoMono.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // slider = createSlider(0, 1000, 1,1);
  // slider.position(10, 10);
  // slider.style('width', '80px');

  textFont(myFont);
  // textSize(300);
   points = myFont.textToPoints('HELLO', windowWidth / 2-300, windowHeight / 2,300,{
    sampleFactor: 0.5,
    simplifyThreshold: 0
  });
   for (let i = 0; i < points.length; i++) {
    var pt= points[i];
    var particle= new particles(pt.x,pt.y);
    particle_X.push(particle);
  }

}

function draw() {
  background(0, 255, 255, 255);
  for (let i = 0; i < points.length; i++) {
    particle_X[i].update();
    particle_X[i].show();
    particle_X[i].behaviors();

  }
}