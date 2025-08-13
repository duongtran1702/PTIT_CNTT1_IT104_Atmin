const findElement = <T>(arr: T[], val: T): T | undefined => {
    return arr.find((e) => e === val);
};
console.log(findElement([1, 2, 3], 2));          // 2
console.log(findElement(["a", "b"], "b"));       // "b"
console.log(findElement([true, false], false));  // false
console.log(findElement([0, 1, 2], 0));          // 0
console.log(findElement([1, 2, 3], 4));          // undefined
