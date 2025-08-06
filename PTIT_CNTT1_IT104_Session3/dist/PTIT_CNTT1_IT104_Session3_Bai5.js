"use strict";
let firstName = 'john';
let secondName = 'atmin';
const fullName = firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    ' ' +
    secondName.charAt(0).toUpperCase() +
    secondName.slice(1);
console.log(fullName);
