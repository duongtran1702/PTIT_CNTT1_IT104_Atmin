"use strict";
const displayNumbers = (delay, callback) => {
    let count = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delay);
};
const printNumber = (num) => {
    console.log(`Số thứ tự: ${num}`);
};
displayNumbers(1000, printNumber);
