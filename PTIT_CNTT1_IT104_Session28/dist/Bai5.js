"use strict";
// Hàm checkCondition
const checkCondition = (condition, callback) => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
};
// Callback function để in kết quả
const printResult2 = (result) => {
    if (result) {
        console.log("Điều kiện đúng ");
    }
    else {
        console.log("Điều kiện sai");
    }
};
// Gọi thử
checkCondition(true, printResult2);
checkCondition(false, printResult2);
