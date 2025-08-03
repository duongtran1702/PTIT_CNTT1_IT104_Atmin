import { existsSync, readFileSync } from 'fs';

const filePath = './Data/student.hehe';
if (!existsSync(filePath)) {
    console.log('File not found!');
    process.exit(1);
}

const data = readFileSync(filePath, 'utf8');
const tmp = JSON.parse(data);

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    hello() {
        console.log(`Xin chao ${this.id}. ${this.name}`);
    }
}

tmp.forEach((hs) => {
    const student = new Student(hs.id, hs.name);
    student.hello();
});
