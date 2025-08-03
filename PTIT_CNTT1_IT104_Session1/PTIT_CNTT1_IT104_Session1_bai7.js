function sumArrays(...arrays) {
    const result = arrays.map((arr) => {
        const sum = arr.reduce((total, num) => total + num, 0);
        return sum;
    });
    return result;
}

const output = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(output);
