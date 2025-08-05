const checkEndString = (str, strTmp) => {
    return str.endsWith(strTmp) ? 'True' : 'False';
};

console.log(checkEndString('Hello, World!', 'Hello'));
console.log(checkEndString('Hi there!', 'there!'));
