function mergeSortArrays(a, b) {
    let i = 0,
        j = 0;
    const result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }
    return result;
}
console.log(mergeSortArrays([1, 2, 3, 5, 9], [4, 6, 7, 8]));
