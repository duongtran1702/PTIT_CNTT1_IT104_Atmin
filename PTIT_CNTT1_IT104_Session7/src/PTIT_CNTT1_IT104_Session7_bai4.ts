abstract class Person {
    constructor(public name: string) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name: string, public id: string) {
        super(name);
    }
    displayInfo(): void {
        console.log(`Name: ${this.name} - ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name: string, public subject: string) {
        super(name);
    }
    displayInfo(): void {
        console.log(`Name: ${this.name} - Subject: ${this.subject}`);
    }
}

const student = new Student('Dương', 'S001');
student.displayInfo();

const teacher = new Teacher('Lan', 'Math');
teacher.displayInfo();
