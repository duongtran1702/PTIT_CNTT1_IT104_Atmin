const reverseArray = <T>(array: T[]): T[] => {
    array = array.slice().reverse();
    return array;
};
const a:number[]=[1, 2, 3];
console.log(reverseArray<number>(a));
console.log(reverseArray<string>(['a', 'b', 'c']));
