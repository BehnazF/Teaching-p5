// let bubble= [];
let Kitty;
let kittens_x=[];

function preload(){
Kitty= loadImage('30387-2-kitten-transparent-image.png');
}

function setup(){
createCanvas(windowWidth, windowHeight);
// for( let i=0; i<100; i++){
    
//     kittens_x[i]= new kittens(windowWidth/2,windowHeight/2, random(20,100),random(20,100));
// }

}

function mouseDragged(){
let b= new kittens(mouseX,mouseY, random(20,100));
kittens_x.push(b);

}

function draw(){
background(0,255,255);
// image(kittens_x, mouseX,mouseY,200,200);
for( let i=0; i<kittens_x.length; i++){
kittens_x[i].move();
kittens_x[i].display();
// kittens_x[i].angle();
}
}