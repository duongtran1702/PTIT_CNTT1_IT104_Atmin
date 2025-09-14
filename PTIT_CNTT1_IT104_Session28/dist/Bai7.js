"use strict";
// Hàm myForEach
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
// Hàm callback in ra thông tin
const printElement = (element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
};
// Gọi hàm
myForEach([1, 2, 3, 4, 5, 6, 7, 8, 9], printElement);
