"use strict";
let namePerson = 'Atmin';
const age = 19;
const job = 'Dev';
const displayInfor = (name, age, job = 'unknown') => {
    console.log('name: ', name);
    console.log('age: ', age);
    console.log('job: ', job);
};
displayInfor(namePerson, age, job);
