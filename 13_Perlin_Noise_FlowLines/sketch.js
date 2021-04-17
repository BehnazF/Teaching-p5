
var inc= 0.1;
var inc2= 0.1;
var scl= 10;
var cols, rows;
var z_offset=0;


var particles= [];

var flowField= [];

function setup() {
createCanvas(500, 500);
// pixelDensity(1);
cols= floor(width/scl);
rows= floor(height/scl);

flowField= new Array(cols*rows);

for(var i=0; i<1000; i++){
  particles[i]= new Particle();
}
}

function draw() {
  background(255);
  var y_offset=0;
  
  for(let x=0;x<rows; x++){
    var x_offset=0;
  for(let y=0; y<cols; y++){

    var index= (x+y*cols);
    
    var angle= noise(x_offset, y_offset, z_offset)*TWO_PI;
    var v= p5.Vector.fromAngle(angle);
    v.setMag(0.5);
    flowField[index]= v;

    x_offset+= inc;
    stroke(0,10);
    strokeWeight(1);
    push();
    translate(x*scl, y*scl);
    rotate(v.heading());
    line(0,0,scl,0);
    pop();
  }
  y_offset+= inc2;
  z_offset+=0.001;

}
for (var i= 0; i<particles.length; i++){

  particles[i].follow(flowField);
  particles[i].update();
  // particles[i].applyForce()
  particles[i].show();
  particles[i].edges();

}


 
}