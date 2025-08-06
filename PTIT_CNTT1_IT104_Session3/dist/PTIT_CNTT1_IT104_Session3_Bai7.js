"use strict";
const removeDupplicate = (str) => {
    let result = '';
    for (const c of str) {
        if (!result.includes(c))
            result += c;
    }
    return result;
};
console.log(removeDupplicate('banana'));
console.log(removeDupplicate('hello world'));
