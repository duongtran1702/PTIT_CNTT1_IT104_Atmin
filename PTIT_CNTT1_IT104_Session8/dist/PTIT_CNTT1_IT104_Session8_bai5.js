"use strict";
const numEven = (arr) => {
    for (const tmp of arr) {
        if (tmp % 2 === 0)
            return tmp;
    }
    return undefined;
};
console.log(numEven([1, 3, 5])); // undefined
console.log(numEven([1, 4, 5])); // 4
console.log(numEven([7, 9, 12, 15])); // 12
