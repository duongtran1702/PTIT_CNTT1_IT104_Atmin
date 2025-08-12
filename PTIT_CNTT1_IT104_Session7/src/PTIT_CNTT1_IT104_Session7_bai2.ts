class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(input: number): void {
        this.speed -= input;
        if (this.speed <= 0) this.speed = 0;
    }

    speedUp(input: number): void {
        this.speed += input;
    }

    showSpeed(): void {
        console.log(`Current speed: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Name: ${this.name} - ID: ${this.id} - Speed: ${this.speed} - Gear: ${this.gear}`);
    }
}

const bike = new Bicycle("Mountain Bike", 10, "B001", 5);

bike.speedUp(15);
bike.showSpeed(); 

bike.slowDown(5);
bike.showSpeed(); 

bike.showInfo();