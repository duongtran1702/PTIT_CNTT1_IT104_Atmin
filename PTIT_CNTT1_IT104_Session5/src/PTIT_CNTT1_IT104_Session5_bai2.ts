interface IStudent {
    id: number;
    age: number;
    email: string;
}

class Student implements IStudent {
    constructor(public id: number, public age: number, public email: string) {}
    display() {
        console.log(`${this.id} ${this.age} ${this.email}`);
    }
}

const students: Student[] = [];

students.push(new Student(1, 20, 'a@gmail.com'));
students.push(new Student(2, 20, 'b@gmail.com'));
students.push(new Student(3, 20, 'c@gmail.com'));
students.push(new Student(4, 20, 'd@gmail.com'));

students.forEach((tmp) => tmp.display());
