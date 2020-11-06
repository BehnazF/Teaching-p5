let myFont;

function preload(){
  myFont= loadFont('RobotoMono.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255,255,255);

  textFont(myFont);
  textSize(64);
  textAlign(CENTER, CENTER);

}

function draw() {
fill(255,255,0,255);
noStroke();
let w= 600;
rect((windowWidth/2)-(w/2),(windowHeight/2)-(w/2),w,w);
fill(0,0,0,255);
text('HELLO WORLD!', windowWidth/2, windowHeight/2);
}