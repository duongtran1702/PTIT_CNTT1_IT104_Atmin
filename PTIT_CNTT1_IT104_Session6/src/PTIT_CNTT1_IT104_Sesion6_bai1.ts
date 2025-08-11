abstract class Shape {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): string;
}

class Rectangle1 extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): string {
        return `Width: ${this.width}\nHeight: ${this.height}`;
    }
}

const rect = new Rectangle1("Rectangle", 5, 3);
console.log("Shape name:", rect.getName());
console.log(rect.getSize());