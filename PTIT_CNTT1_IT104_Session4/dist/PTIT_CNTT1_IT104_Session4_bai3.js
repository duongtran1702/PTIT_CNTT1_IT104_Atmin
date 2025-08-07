"use strict";
const displayInfor = (student) => {
    return `Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`;
};
const student1st = {
    name: 'Alice',
    age: 20,
    email: 'alice@gmail.com',
};
console.log(displayInfor(student1st));
