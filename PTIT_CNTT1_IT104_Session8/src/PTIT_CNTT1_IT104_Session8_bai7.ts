const flatten = <T>(arr: T[][]): T[] => {
    const tmp = arr.reduce((result, e) => [...result, ...e], []);
    return tmp;
};

const arr:number[][]=[[1, 2], [3, 4], [5, 6]];
const arr2=[['apple', 'banana'], ['cherry'], ['date', 'elderberry']]

console.log(flatten(arr));
console.log(flatten(arr2));
