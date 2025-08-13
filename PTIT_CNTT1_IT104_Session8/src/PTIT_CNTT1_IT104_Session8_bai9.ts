type NestedArray<T> = T | NestedArray<T>[];
const flatten1 = <T>(arr: NestedArray<T>[]): T[] => {
    const result1:T[] = [];
    for (let tmp of arr) {
        if (Array.isArray(tmp)) {
            result1.push(...flatten1(tmp));
        } else result1.push(tmp);
    }
    return result1;
};
console.log(flatten1([1, [2, [3, 4], 5], 6]));
