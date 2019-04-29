int led = D0;

void setup() {
  pinMode(led, OUTPUT);
  Particle.function("led",led_toggle);
  digitalWrite(led,LOW);
}

void loop() {
    
}

int led_toggle(String command) {
    if (command=="on") {
        digitalWrite(led,HIGH);
        return 1;
    } else if (command=="off") {
        digitalWrite(led,LOW);
        return 0;
    } else {
        return -1;
    }
}
