const isletter = (c: string): boolean => {
    return /^[a-zA-Z]$/.test(c);
};

const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const processInput = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        const tmp = Number(input);
        if (!isNaN(tmp)) return tmp * tmp;
        let len = 0;
        for (const c of input) {
            if (isletter(c)) ++len;
        }
        return `${len} ký tự chữ cái `;
    } else if (typeof input === 'number') {
        if (isPrime(input)) return `Là số nguyên tố`;
        return `Không phải số nguyên tố`;
    } else if (typeof input === 'boolean') {
        if (input === true) return `Giá trị là true - tiến hành xử lý`;
        return `Giá trị là false - dừng xử lý`;
    }
};

console.log(processInput("12"));
console.log(processInput("abcd12345"));
console.log(processInput(7));
console.log(processInput(true));
