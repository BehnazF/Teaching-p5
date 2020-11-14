let vid;
let button;
let playing= false;

function setup(){
vid= createVideo(['vid.mp4']);
button= createButton('play');
button.mousePressed(Toggle);

}

function Toggle(){
if (playing){
  vid.pause();
  button.html('play');
}

else{
vid.loop();
button.html('pause');

}
playing =!playing;

}
