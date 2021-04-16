int led = 13;
uint8_t input;


//Servo servo1;

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  pinMode(led, OUTPUT);

}

void loop() {
  if (Serial.available() > 0)
  {
    input = Serial.read();//input== -1: no input

    if (input == 1)
    {
      digitalWrite(led, LOW);
    }

      if (input == 2)
    {
      digitalWrite(led, HIGH);
    }
    Serial.write(input);
    //  delay(1);

    //  analogWrite(led, mappedVal);

  }

  }
