
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255,255,255);

}

function draw() {
fill(255,255,0,255);
noStroke();
let w= 600;
rect((windowWidth/2)-(w/2),(windowHeight/2)-(w/2),w,w);
// fill(0);
// triangle(200,200,150,150,200,160);
}