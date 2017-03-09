#include <Servo.h>

Servo servo1;
const int dirs1 =4;
const int dirs2 =2;
const int steps1= 7;
const int steps2 = 6;

void setup() {
  servo1.attach(9);
  pinMode(13, OUTPUT);
  pinMode(dirs1,OUTPUT);
  pinMode(dirs2,OUTPUT);
  pinMode(steps1,OUTPUT);
  pinMode(steps2,OUTPUT);

  // This will use the serial monitor so that you can just use inputs like 'w' 'a' 's' and 'd'
  Serial.begin(9600);
  Serial.println("Ready");
}

void loop() {
  if ( Serial.available()) {
    char ch = Serial.read();
    // This is a switch case, if that leter is entered then do that task
    switch(ch) {
      case 'w':
        back();
        penSweep();
        break;
      case 'a':
        left();
       // penSweep();
        break;
      case 's':
        front();
     //   penSweep();
        break;
      case 'd':
        right();
        //penSweep();
        break;
    }
  }
}

void penSweep(){
  delay(100);
  servo1.write(0); // goes down
  delay(100);
  servo1.write(100); // resets to 100, 90 is the center
}

void steps(){
  int i = 0;
  // you can change 100 to be how ever many steps you need it to take.
  // I set it to 100 so I could see a difference
  while(i < 100)
  {
    digitalWrite(steps1, HIGH);
    digitalWrite(steps2, HIGH);
    delay(1);
    digitalWrite(steps1, LOW);
    digitalWrite(steps2, LOW);
    delay(1);
    i=i+1;
  }
}

// Took your directions and just put them into funtions
void front(){
  digitalWrite(dirs1, LOW);//FRONT
  digitalWrite(dirs2, LOW);
  steps();
}
void back(){
  digitalWrite(dirs1, HIGH);// BACK
  digitalWrite(dirs2, HIGH);
  steps();
}
void left(){
  digitalWrite(dirs1, HIGH);// LEFT
  digitalWrite(dirs2, LOW);
  steps();
}
void right(){
  digitalWrite(dirs1, LOW);// RIGHT
  digitalWrite(dirs2, HIGH);
  steps();
}
