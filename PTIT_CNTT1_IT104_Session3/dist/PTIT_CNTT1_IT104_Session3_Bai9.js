import { parseNumber, add, subtract, multiply, divide } from './PTIT_CNTT1_IT104_Session3_Bai8.js';
// Các hàm power, sqrt, factorial giữ nguyên
const power = (base, exponent) => Math.pow(base, exponent);
const sqrt = (base, root) => root === 0 ? 'Root cannot be zero' : Math.pow(base, 1 / root);
const factorial = (n) => {
    if (n < 0 || !Number.isInteger(n))
        return 'Invalid input for factorial';
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
};
// Hàm hiển thị kết quả a (operation) b = c
const displayResult = (a, b, op, result) => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        if (b === null) {
            resultDiv.innerText = `${op}${a} = ${result}`;
        }
        else {
            resultDiv.innerText = `${a} ${op} ${b} = ${result}`;
        }
    }
};
// Lấy input từ form
const getInputs = () => {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    return [parseNumber(input1), parseNumber(input2)];
};
// Event Handlers
document.getElementById('add').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, '+', add(a, b));
};
document.getElementById('subtract').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, '-', subtract(a, b));
};
document.getElementById('multiply').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, '*', multiply(a, b));
};
document.getElementById('divide').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, '/', divide(a, b));
};
document.getElementById('power').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, '^', power(a, b));
};
document.getElementById('sqrt').onclick = () => {
    const [a, b] = getInputs();
    if (a === null || b === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, b, `√`, sqrt(a, b));
};
document.getElementById('factorial').onclick = () => {
    const input1 = document.getElementById('input1').value;
    const a = parseNumber(input1);
    if (a === null)
        return displayResult('', '', '', 'Invalid input');
    displayResult(a, null, '!', factorial(a));
};
