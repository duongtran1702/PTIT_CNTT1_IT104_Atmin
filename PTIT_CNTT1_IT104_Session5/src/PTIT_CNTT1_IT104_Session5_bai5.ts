class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.height * this.width;
    }

    calculateCircumference(): number {
        return (this.height + this.width) * 2;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    setWidth(input: number) {
        this.width = input;
    }

    setHeight(input: number) {
        this.height = input;
    }
}

const rec = new Rectangle(3, 5);

console.log(`width = ${rec.getWidth()}`);
console.log(`height = ${rec.getHeight()}`);
console.log(`Area = ${rec.calculateArea()}`);
console.log(`Cir = ${rec.calculateCircumference()}`);

rec.setHeight(8);
rec.setWidth(5);
console.log('After update: ');
console.log(`Area = ${rec.calculateArea()}`);
console.log(`Cir = ${rec.calculateCircumference()}`);

