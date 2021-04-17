var start= 0;
var inc1= 0.0009;
var inc2= 0.0009;
let slider;
var angle;
var step;
var val;
let slider2;
var val2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(1, 100, 10, 10);
  slider.position(40, 40);
  slider.style('width', '80px');

  slider2 = createSlider(0.001, 0.03, 0.001,0.0001);
  slider2.position(40, 80);
  slider2.style('width', '280px');


  angle= 0;
  step=TWO_PI/1000;
 
}

function draw() {
  val= slider.value();
  val2= slider2.value();
  background(0,255,255,255);
  
  fill(100);
  textSize(14);
  strokeWeight(1);
  text('brush size'+ slider.value(), 40,70);
  text('noise'+ slider2.value(), 40,110);

//   beginShape();
//   var lineNoise= start;
//   for(let i=0; i<width; i++){
//     stroke(0);
//     vertex(i,map(noise(lineNoise),0,1,0,height));
//     lineNoise += inc1;
//   }
//   endShape();
// start+= inc2;


stroke(0);

strokeWeight(val);

noFill();
translate(width/2, height/2);

let test= map(noise(inc1),0,1,0,width);

let x = 500*(cos(angle))*map(noise(inc1),0,1,0,width/1000);
let y = 500*(sin(angle))*map(noise(inc1),0,1,0,height/1000);
vertex(x, y);
console.log (map(noise(inc1),0,1,0,height));
inc1 += val2;

angle+= step;

endShape();
}