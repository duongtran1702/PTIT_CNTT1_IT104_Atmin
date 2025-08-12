"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`Meow meow`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
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
