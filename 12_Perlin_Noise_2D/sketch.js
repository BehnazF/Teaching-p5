
var inc= 0.01;
var inc2= 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
pixelDensity(1);
 
}

function draw() {
  var y_offset=0;
  loadPixels();
  for(let i=0;i<width; i++){
    var x_offset=0;
  for(let j=0; j<height; j++){

    var index= (i+j*width)*4;
    var r= noise(x_offset, y_offset)*255;
    pixels[index+0]= r;
    pixels[index+1]=r;
    pixels[index+2]=r;
    pixels[index+3]=255;
    x_offset+= inc;
  }
  y_offset+= inc2;

}
  updatePixels();
 
}