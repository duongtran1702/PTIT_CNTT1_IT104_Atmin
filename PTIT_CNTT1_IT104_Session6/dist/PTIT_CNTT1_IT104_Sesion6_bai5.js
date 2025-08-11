"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp(input) {
        this.speed += input;
    }
    slowDown(input) {
        this.speed -= input;
        if (this.speed < 0)
            this.speed = 0;
    }
    stop() {
        this.speed = 0;
    }
    showSpeed() {
        console.log(`Current speed: ${this.speed}`);
    }
}
const car = new Vehicle(50);
car.showSpeed();
car.speedUp(20);
car.showSpeed();
car.slowDown(30);
car.showSpeed();
car.stop();
car.showSpeed();
