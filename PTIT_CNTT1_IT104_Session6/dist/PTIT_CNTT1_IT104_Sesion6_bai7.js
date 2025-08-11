import { Student, Classroom } from './PTIT_CNTT1_IT104_Sesion6_bai6.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
class Classroom2 extends Classroom {
    constructor() {
        super();
    }
    removeStudent(allStudents, id) {
        const idx = this.students.findIndex((student) => student.getId() === id);
        if (idx !== -1) {
            allStudents.push(this.students[idx]);
            this.students.splice(idx, 1);
            console.log(`Student with ID ${id} has been removed from the class and added back to the general student list.`);
        }
        else {
            console.log(`Student with ID ${id} was not found in this class.`);
        }
    }
    editStudent(id) {
        const idx = this.students.findIndex((student) => student.getId() === id);
        if (idx !== -1) {
            const newName = prompt('Enter the new name for the student: ');
            this.students[idx] = new Student(id, newName);
            console.log(`Student with ID ${id} has been updated with the new name: ${newName}.`);
        }
        else {
            console.log(`Student with ID ${id} was not found in this class.`);
        }
    }
}
const allStudents = [
    new Student('S1', 'Nguyen Van A'),
    new Student('S2', 'Tran Thi B'),
    new Student('S3', 'Le Van C'),
    new Student('S4', 'Pham Thi D'),
    new Student('S5', 'Hoang Van E'),
    new Student('S6', 'Do Thi F'),
];
const class1 = new Classroom2();
const class2 = new Classroom2();
class1.addStudentInClass(allStudents);
class2.addStudentInClass(allStudents);
console.log('--- Before removal and editing ---');
console.log('Class 1:');
class1.showStudents();
console.log('Class 2:');
class2.showStudents();
class1.removeStudent(allStudents, 'S2');
class1.editStudent('S3');
console.log('\n--- After removal and editing ---');
console.log('Class 1:');
class1.showStudents();
console.log('\nGeneral student list after removal:');
allStudents.forEach((student) => console.log(`ID: ${student.getId()} - Name: ${student.getName()}`));
