"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle1 extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `Width: ${this.width}\nHeight: ${this.height}`;
    }
}
const rect = new Rectangle1("Rectangle", 5, 3);
console.log("Shape name:", rect.getName());
console.log(rect.getSize());
