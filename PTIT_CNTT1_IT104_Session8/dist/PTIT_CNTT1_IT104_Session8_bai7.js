"use strict";
const flatten = (arr) => {
    const tmp = arr.reduce((result, e) => [...result, ...e], []);
    return tmp;
};
const arr = [[1, 2], [3, 4], [5, 6]];
const arr2 = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
console.log(flatten(arr));
console.log(flatten(arr2));
