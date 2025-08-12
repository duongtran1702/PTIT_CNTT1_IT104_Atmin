"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(input) {
        this.speed -= input;
        if (this.speed <= 0)
            this.speed = 0;
    }
    speedUp(input) {
        this.speed += input;
    }
    showSpeed() {
        console.log(`Current speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name} - ID: ${this.id} - Speed: ${this.speed} - Gear: ${this.gear}`);
    }
}
const bike = new Bicycle("Mountain Bike", 10, "B001", 5);
bike.speedUp(15);
bike.showSpeed();
bike.slowDown(5);
bike.showSpeed();
bike.showInfo();
