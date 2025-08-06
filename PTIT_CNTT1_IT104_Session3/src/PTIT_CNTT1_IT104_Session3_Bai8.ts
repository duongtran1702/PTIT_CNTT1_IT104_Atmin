const parseNumber = (value: string | number): number | null => {
    if (typeof value === 'number') return value;
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
};

const add = (a: number | string, b: number | string): number | string => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    if (numA === null || numB === null) return 'Invalid input';
    return numA + numB;
};

const subtract = (a: number | string, b: number | string): number | string => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    if (numA === null || numB === null) return 'Invalid input';
    return numA - numB;
};

const multiply = (a: number | string, b: number | string): number | string => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    if (numA === null || numB === null) return 'Invalid input';
    return numA * numB;
};

const divide = (a: number | string, b: number | string): number | string => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    if (numA === null || numB === null) return 'Invalid input';
    if (numB === 0) return 'Cannot divide by zero';
    return numA / numB;
};

console.log(add('10', '5'));
console.log(subtract('20', 5));
console.log(multiply(3, '4'));
console.log(divide('100', 'abc'));
console.log(divide(10, 0));

export { parseNumber, add, subtract, multiply, divide };
