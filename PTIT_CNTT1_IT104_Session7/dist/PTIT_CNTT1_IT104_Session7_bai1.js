"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name} - Phone: ${this.phone} - Company: ${this.company}`);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name} - Phone: ${this.getPhone()} - Company: ${this.company} - Team size: ${this.teamSize}`);
    }
}
const emp = new Employee("Dương", "PTIT", "0123456789");
emp.printInfo();
const mgr = new Manager("Lam", "PTIT", "0987654321", 10);
mgr.printInfo();
