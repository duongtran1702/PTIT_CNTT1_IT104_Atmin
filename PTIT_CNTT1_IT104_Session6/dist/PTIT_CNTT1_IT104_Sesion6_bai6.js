class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
const students = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach((tmp) => console.log(`Id: ${tmp.getId()} - Name: ${tmp.getName()}`));
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        this.students = this.students.filter((tmp) => tmp.getId() != id);
    }
    addStudentInClass(array) {
        const selected = array.splice(0, 3);
        selected.forEach((tmp) => {
            this.addStudent(tmp);
        });
    }
}
students.push(new Student('S1', 'Nguyen Van A'), new Student('S2', 'Tran Thi B'), new Student('S3', 'Le Van C'), new Student('S4', 'Pham Thi D'), new Student('S5', 'Hoang Van E'), new Student('S6', 'Do Thi F'));
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
