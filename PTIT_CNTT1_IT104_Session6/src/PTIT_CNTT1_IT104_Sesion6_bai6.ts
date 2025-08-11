class Student {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

const students: Student[] = [];

class Classroom {
    students: Student[];
    constructor() {
        this.students = [];
    }
    showStudents(): void {
        this.students.forEach((tmp) =>
            console.log(`Id: ${tmp.getId()} - Name: ${tmp.getName()}`)
        );
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: string): void {
        this.students = this.students.filter((tmp) => tmp.getId() != id);
    }

    addStudentInClass(array: Student[]): void {
        const selected = array.splice(0, 3);
        selected.forEach((tmp) => {
            this.addStudent(tmp);
        });
    }
}

students.push(
    new Student('S1', 'Nguyen Van A'),
    new Student('S2', 'Tran Thi B'),
    new Student('S3', 'Le Van C'),
    new Student('S4', 'Pham Thi D'),
    new Student('S5', 'Hoang Van E'),
    new Student('S6', 'Do Thi F')
);

const class1 = new Classroom();
const class2 = new Classroom();

class1.addStudentInClass(students);
class2.addStudentInClass(students);

console.log('=== Class 1 ===');
class1.showStudents();

console.log('\n=== Class 2 ===');
class2.showStudents();

console.log('\n=== Remaining students in allStudents ===');
console.log(students);

export { Student, Classroom };
