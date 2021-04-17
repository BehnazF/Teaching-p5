/* Inspired by: https://www.makerguides.com/hc-sr04-arduino-tutorial/ */

#include <Servo.h>
Servo myServo;



// Define Trig and Echo pin:
#define trigPin 2
#define echoPin 3

//Define LED
#define led 13

// Define variables:
long duration;
int distance;
int pos = 0;

void setup() {
  myServo.attach(9);
  // Define inputs and outputs:
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(led, OUTPUT);

  //Begin Serial communication at a baudrate of 9600:
  Serial.begin(9600);
}

void loop() {
  // Clear the trigPin by setting it LOW:
  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);

  // Trigger the sensor by setting the trigPin high for 10 microseconds:
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the echoPin, pulseIn() returns the duration (length of the pulse) in microseconds:
  duration = pulseIn(echoPin, HIGH);
  // Calculate the distance:
  distance = duration * 0.034 / 2;

  Serial.print("Distance = ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(50);

  if (distance < 10) {
    digitalWrite(led, HIGH);
    myServo.write(90);
//    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
//      // in steps of 1 degree
//      myServo.write(pos);              // tell servo to go to position in variable 'pos'
//      delay(30);                       // waits 15ms for the servo to reach the position
//    }

  }
  else {
    //    myServo.write(+60);
    digitalWrite(led, LOW);
    myServo.write(0);
//    for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
//      myServo.write(pos);              // tell servo to go to position in variable 'pos'
//      delay(30);                       // waits 15ms for the servo to reach the position
//    }
  }
}
