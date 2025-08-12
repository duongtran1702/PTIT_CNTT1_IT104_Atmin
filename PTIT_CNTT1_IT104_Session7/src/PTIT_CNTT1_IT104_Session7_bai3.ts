abstract class Animal {
    constructor(public name: string) {}
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): void {
        console.log(`Meow meow`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): void {
        console.log(`Gau Gau`);
    }
}

const cat = new Cat('Mimi');
const dog = new Dog('Max');

cat.printName();
cat.makeNoise();
console.log('');

dog.printName();
dog.makeNoise();
