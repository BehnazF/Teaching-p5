int led= 13;
int button= 2;

int state= 0;

void setup() {
  // put your setup code here, to run once:
pinMode(led, OUTPUT);
pinMode(button, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

state= digitalRead(button);

if (state == HIGH){
  digitalWrite(led, HIGH);
}
else{
  digitalWrite(led, LOW);
  
}

}
