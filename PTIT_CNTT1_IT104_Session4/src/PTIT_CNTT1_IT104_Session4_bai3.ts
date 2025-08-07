interface Student {
    name: string;
    age: number;
    email: string;
}

const displayInfor = (student: Student): string => {
    return `Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`;
};

const student1st: Student = {
    name: 'Alice',
    age: 20,
    email: 'alice@gmail.com',
};
console.log(displayInfor(student1st));
