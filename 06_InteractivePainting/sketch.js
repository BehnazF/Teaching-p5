

let colorPicker;
let slider;

function setup(){
createCanvas(windowWidth, windowHeight);
background(50);

//setup our colorpicker
colorPicker= createColorPicker('#FF0000');
colorPicker.position(30,280);

//setup our slider
slider=createSlider(0,100,50);
slider.position(30,350);

}

function draw(){
noStroke();
fill(255,255,255,255);
rect(0,0,180,height);

fill(100);
textSize(14);
text('brush size'+ slider.value(), 30,390);
text('brush color', 30,320);

}

function mouseDragged(){
  fill(colorPicker.color());
  ellipse(mouseX, mouseY, slider.value(),slider.value());
}