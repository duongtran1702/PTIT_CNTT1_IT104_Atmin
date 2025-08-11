interface changeSpeed {
    speedUp(input: number): void;
    slowDown(input: number): void;
    stop(): void;
}

class Vehicle implements changeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(input: number): void {
        this.speed += input;
    }

    slowDown(input: number): void {
        this.speed -= input;
        if (this.speed < 0) this.speed = 0;
    }

    stop(): void {
        this.speed = 0;
    }

    showSpeed(): void {
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
