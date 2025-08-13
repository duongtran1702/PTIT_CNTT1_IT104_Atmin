const checkDup = <T extends string>(word: T): boolean => {
    let temp = '';
    for (let tmp of word) {
        if (temp.toLowerCase().includes(tmp.toLowerCase())) return true;
        temp += tmp;
    }
    return false;
};

const findLongestWord = <T extends string>(str: T): string => {
    let result2 = '';
    for (let tmp of str.split(' ')) {
        if (!checkDup(tmp) && tmp.length > result2.length) result2 = tmp;
    }
    return result2;
};

console.log(
    findLongestWord('hello world apple banana orange pumpkin cucumber')
);
