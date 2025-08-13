"use strict";
const merge = (a, b) => {
    return Object.assign(Object.assign({}, a), b);
};
const obj1 = { name: 'Dương', class: 'CNTT1' };
const obj2 = { age: 18 };
const result = merge(obj1, obj2);
console.log(result);
