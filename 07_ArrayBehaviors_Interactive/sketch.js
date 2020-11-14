let bubble= [];

function setup(){
createCanvas(windowWidth, windowHeight);
// for( let i=0; i<1000; i++){

//     bubble[i]= new balls(i*20,windowHeight/2,random(20,100));
// }
}

function mouseDragged(){
let b= new balls(mouseX,mouseY, random(20,100));
bubble.push(b);

}

function draw(){
background(0,255,255);
for( let i=0; i<bubble.length; i++){
bubble[i].move();
bubble[i].display();
}
}