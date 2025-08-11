interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.height * this.width;
    }
    calculatePerimeter(): number {
        return (this.height + this.width) * 2;
    }
}

const circle = new Circle(5); // Bán kính = 5
const rectangle = new Rectangle(4, 6); // Rộng = 4, Cao = 6

console.log('Circle :');
console.log(`Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Perimeter: ${circle.calculatePerimeter().toFixed(2)}`);

console.log('\nRectangle :');
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
