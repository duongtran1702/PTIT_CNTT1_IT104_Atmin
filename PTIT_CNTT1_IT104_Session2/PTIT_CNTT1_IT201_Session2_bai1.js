function sumEvenNum(array) {
    let sum = array.reduce((tmp, num) => {
        if (num % 2 == 0) return tmp + num;
        else return tmp;
    }, 0);
    return sum;
}

console.log(sumEvenNum([1, 2, 3, 4, 5, 6]));

