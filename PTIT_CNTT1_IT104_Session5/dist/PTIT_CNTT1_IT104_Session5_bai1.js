"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
        console.log('');
    }
}
const v1 = new Vehicle('Yamaha', 2025, 'Abc');
v1.display();
const v2 = new Vehicle('Honda', 2024, 'Abc');
v2.display();
