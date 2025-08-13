"use strict";
const reverseArray = (array) => {
    array = array.slice().reverse();
    return array;
};
const a = [1, 2, 3];
console.log(reverseArray(a));
console.log(reverseArray(['a', 'b', 'c']));
