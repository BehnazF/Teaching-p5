let myFont;
let serial;          
let data; 
let diaNoise= 0;

function preload(){
  myFont= loadFont('RobotoMono.ttf');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();
  // serial.list();
  serial.open('COM7');
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);


  textFont(myFont);
  // textSize(64);
  textAlign(CENTER, CENTER);
  
}
function serverConnected() {
  print("Connected to Server");
}
function gotList(thelist) {
  print("List of Serial Ports:");
  
  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotError(theerror) {
  print(theerror);
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotData() {
  data = serial.read();
  console.log(data);
  
}


// // get the list of ports:
// function printList(portList) {
//   // portList is an array of serial port names
//   for (var i = 0; i < portList.length; i++) {
//     // Display the list the console:
//     console.log(i + portList[i]);
//   }
// }



function draw() {
  background(0,255,255,255);
  fill(255,255,0,255);
noStroke();
let w= map(noise(diaNoise),0,1,0,10);
diaNoise += 0.001;
ellipse((windowWidth/2),(windowHeight/2),w*data,w*data);
fill(0,0,0,255);
textSize(w*10);
text('Turn knob!', windowWidth/2, windowHeight/2);
}