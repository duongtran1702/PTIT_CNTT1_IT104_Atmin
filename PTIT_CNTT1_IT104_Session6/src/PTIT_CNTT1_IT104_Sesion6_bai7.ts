// File: src/PTIT_CNTT1_IT104_Sesion6_bai7.ts

import promptSync from 'prompt-sync';
const prompt = promptSync();

class Student1 {
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

    setName(newName: string): void {
        this.name = newName;
    }
}

class Classroom1 {
    students: Student1[];

    constructor() {
        this.students = [];
    }

    showStudents(): void {
        if (this.students.length === 0) {
            console.log('No students in this classroom.');
            return;
        }
        this.students.forEach((student) =>
            console.log(`Id: ${student.getId()} - Name: ${student.getName()}`)
        );
    }

    addStudent(student: Student1): void {
        this.students.push(student);
    }

    filterStudent(id: string): void {
        this.students = this.students.filter(
            (student) => student.getId() !== id
        );
    }

    addStudentInClass(array: Student1[]): void {
        const selected = array.splice(0, 3);
        selected.forEach((student) => this.addStudent(student));
    }
}

class Classroom2 extends Classroom1 {
    private allStudentsPool: Student1[];

    constructor(allStudentsPool: Student1[]) {
        super();
        this.allStudentsPool = allStudentsPool;
    }

    removeStudent(id: string): void {
        const idx = this.students.findIndex(
            (student) => student.getId() === id
        );
        if (idx !== -1) {
            const removed = this.students.splice(idx, 1)[0];
            this.allStudentsPool.push(removed);
            console.log(`Removed student ${removed.getId()} from classroom.`);
        } else {
            console.log(`Student with id ${id} not found in this classroom.`);
        }
    }

    editStudent(id: string): void {
        const idx = this.students.findIndex(
            (student) => student.getId() === id
        );
        if (idx !== -1) {
            const newName = prompt(
                `Enter new name for student with id ${id}: `
            );
            this.students[idx].setName(newName);
            console.log(`Student ${id} name updated to: ${newName}`);
        } else {
            console.log(`Student with id ${id} not found in this classroom.`);
        }
    }
}
``
const allStudents: Student1[] = [
    new Student1('S1', 'Nguyen Van A'),
    new Student1('S2', 'Tran Thi B'),
    new Student1('S3', 'Le Van C'),
    new Student1('S4', 'Pham Thi D'),
    new Student1('S5', 'Hoang Van E'),
    new Student1('S6', 'Do Thi F'),
];

const class1 = new Classroom2(allStudents);
const class2 = new Classroom2(allStudents);

class1.addStudentInClass(allStudents);
class2.addStudentInClass(allStudents);

console.log('--- Class 1 students ---');
class1.showStudents();

console.log('\n--- Class 2 students ---');
class2.showStudents();

console.log('\n--- Remaining students in allStudents pool ---');
allStudents.forEach((s) =>
    console.log(`Id: ${s.getId()} - Name: ${s.getName()}`)
);

console.log('\nRemove student S2 from Class 1:');
class1.removeStudent('S2');

console.log('\nClass 1 students after removal:');
class1.showStudents();

console.log('\nAll students pool after removal:');
allStudents.forEach((s) =>
    console.log(`Id: ${s.getId()} - Name: ${s.getName()}`)
);

console.log('\nEdit student S5 in Class 2:');
class2.editStudent('S5');

console.log('\nClass 2 students after edit:');
class2.showStudents();
