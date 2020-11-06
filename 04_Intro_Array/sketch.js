let dia= [200,100,500,400,160];
let words= ["fine", "Yellow", "good", "blue", "pretty", "cold"];
let pickRandomWord;

function setup(){

  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255,255,0);
  noStroke();
  fill(0,255,255,50);
  for(let i=0;i<dia.length;i++){

    ellipse(windowWidth/2,windowHeight/2,dia[i],dia[i]);
  }
fill(0);
textSize(32);
textAlign(CENTER,CENTER);
text(words[pickRandomWord], windowWidth/2, windowHeight/2);

}

function mousePressed(){

pickRandomWord= int (random(0,words.length));
console.log(pickRandomWord);

}

