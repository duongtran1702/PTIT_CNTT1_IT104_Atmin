"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.height * this.width;
    }
    calculatePerimeter() {
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
