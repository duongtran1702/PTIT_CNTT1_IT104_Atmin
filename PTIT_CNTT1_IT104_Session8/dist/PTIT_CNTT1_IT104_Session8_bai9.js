"use strict";
const flatten1 = (arr) => {
    const result1 = [];
    for (let tmp of arr) {
        if (Array.isArray(tmp)) {
            result1.push(...flatten1(tmp));
        }
        else
            result1.push(tmp);
    }
    return result1;
};
console.log(flatten1([1, [2, [3, 4], 5], 6]));
