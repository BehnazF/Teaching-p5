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

points = myFont.textToPoints('REALIGNMENT', windowWidth / 2-300, windowHeight / 2,100,{
    sampleFactor: 0.4,
    simplifyThreshold: 0
  });
  // bounds = myFont.textBounds(' REALIGNMENT ', 0, 0, 10);
   for (let i = 0; i < points.length; i++) {
    var pt= points[i];
    var particle= new particles(pt.x,pt.y);
    particle_X.push(particle);
  }

}

function draw() {
  background(100);
  fill(255,255,0,150);
  textSize(10);
  textAlign(CENTER, CENTER);
  noStroke();
text('Realignments: Computational Publics', windowWidth/2+200, windowHeight/2+20)
  
  
  for (let i = 0; i < points.length; i++) {
    particle_X[i].update();
    particle_X[i].show();
    particle_X[i].behaviors();

  }
}