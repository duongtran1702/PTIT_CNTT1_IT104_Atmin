let firstName: string = 'john';
let secondName: string = 'atmin';

const fullName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    ' ' +
    secondName.charAt(0).toUpperCase() +
    secondName.slice(1);
console.log(fullName);
