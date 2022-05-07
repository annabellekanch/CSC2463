/*
 *Annabelle Kanchirathingal
 *Final Integration Project
*/
uint8_t buf[8] = { 0 };
int led = 8;
int led2 = 9;
#define PIN_A 5 
#define PIN_D 7 

void setup() {
  Serial.begin(9600); 
  
  pinMode(PIN_A, INPUT);
  pinMode(led, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(PIN_D, INPUT);
}

void loop() 
{
  if (digitalRead(PIN_A) == HIGH) 
  {
    buf[2] = 4;   
    Serial.write(buf, 8); 
    digitalWrite(led, HIGH);
    releaseKey();
  } 
  else
  {
    digitalWrite(led, LOW);
  }
  if (digitalRead(PIN_D) == HIGH) 
  {
    buf[2] = 7;   // D keycode
    Serial.write(buf, 8); // Send keypress
    digitalWrite(led2, HIGH);
    releaseKey();
  } 
  else
  {
    digitalWrite(led2, LOW);
  }
  
}
void releaseKey() 
{
  buf[0] = 0;
  buf[2] = 0;
  Serial.write(buf, 8); 
}
