let myFont;
let r,g,b;
let w;

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

fill(r,g,b,50);
noStroke();

rect((windowWidth/2)-(w/2),(windowHeight/2)-(w/2),w,w);
fill(0,0,0,255);
text('HELLO WORLD!', windowWidth/2, windowHeight/2);
}

function mousePressed(){
  pickRandomColor();
}

function pickRandomColor(){
r= random(0,255);
g= random(0,255);
b= random(0,255);
w= random(50,1000);
}