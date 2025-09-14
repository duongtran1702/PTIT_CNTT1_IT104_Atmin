"use strict";
const calculate = (a, b, callback) => {
    const sum = a + b;
    callback(sum);
};
const printResult = (result) => {
    console.log(result);
};
calculate(3, 7, printResult);
