"use strict";
// Hàm myFilter
function myFilter(array, search, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], search)) {
            result.push(array[i]);
        }
    }
    return result;
}
// Callback để so sánh
const isMatch = (element, search) => {
    return element === search;
};
// Gọi hàm
const numbers = [10, 20, 30, 20, 40];
const found = myFilter(numbers, 20, isMatch);
console.log(found);
