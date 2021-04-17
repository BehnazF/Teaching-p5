int led = 9;
int pot = A0;


void setup() {
  // put your setup code here, to run once:
  pinMode(led, OUTPUT);
  pinMode(pot, INPUT);

 Serial.begin(9600);
}

void loop() {
  int val = analogRead(pot);
  int mappedVal = map(val, 500, 1023, 0, 255);
  Serial.write(mappedVal);

}
