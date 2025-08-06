"use strict";
const num1 = 20;
const num2 = 5;
let num3;
let num4 = '10';
let num5 = true;
num3 = num1 + num2;
console.log(`Cộng: ${num1} + ${num2} = ${num3}`);
num3 = num1 - num2;
console.log(`Trừ: ${num1} - ${num2} = ${num3}`);
num3 = num1 * num2;
console.log(`Nhân: ${num1} * ${num2} = ${num3}`);
num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);
let result = num4 + num5;
console.log(`num4 + num5 = ${result}`);
// Khi làm num4 + num5:
// num4 là string ("10").
// num5 là boolean (true).
// Dùng dấu +, nếu 1 bên là string → ép kiểu sang string rồi nối chuỗi.
// → Kết quả: "10" + "true" → "10true".
