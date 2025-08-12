"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Name: ${this.name} - ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name: ${this.name} - Subject: ${this.subject}`);
    }
}
const student = new Student('Dương', 'S001');
student.displayInfo();
const teacher = new Teacher('Lan', 'Math');
teacher.displayInfo();
