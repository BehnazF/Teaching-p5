var offset_X= 0;
var offset_Y=100;
var diaNoise=0;




function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(0,255,255,255);

noStroke();

let _x= map(noise(offset_X),0,1,0,width);
let _y= map(noise(offset_Y),0,1,0,height);
offset_X += 0.006;
offset_Y += 0.006;

let dia= map(noise(diaNoise),0,1,0,height/2);
diaNoise += 0.03;
fill(255,255,0,100);
ellipse(_x,_y,dia*1.1,dia*1.1);
fill(255,255,0,255);
ellipse(_x,_y,dia,dia);


}