const sentence: string = 'hello world apple banana orange pumpkin cucumber';
const temp: string[] = sentence.split(' ');
console.log(temp);
let output = '';

const checkDup = (input: string): boolean => {
    let tmp1 = '';
    for (const c of input) {
        if (!tmp1.includes(c)) tmp1 += c;
        else return false;
    }
    return true;
};
for (let x of temp) {
    if (x.length > output.length && checkDup(x)) output = x;
}
console.log(output);
