"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    display() {
        console.log(`${this.id} ${this.age} ${this.email}`);
    }
}
const students = [];
students.push(new Student(1, 20, 'a@gmail.com'));
students.push(new Student(2, 20, 'b@gmail.com'));
students.push(new Student(3, 20, 'c@gmail.com'));
students.push(new Student(4, 20, 'd@gmail.com'));
students.forEach((tmp) => tmp.display());
