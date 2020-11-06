let bubble= [];

function setup(){
createCanvas(windowWidth, windowHeight);
for( let i=0; i<100; i++){

    bubble[i]= new balls(windowWidth/2,windowHeight/2,100);
}
}

function draw(){
background(0,255,255);
for( let i=0; i<100; i++){
bubble[i].move();
bubble[i].display();
}
}