function insertArray(a, b, pos) {
    if (pos < 0 || pos > a.length) {
        console.log('Position is invalid!');
        return;
    }
    const result = [...a.slice(0, pos), ...b, ...a.slice(pos)];
    console.log(result);
}
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);
insertArray(['a', 'b', 'e', 'f'], ['c', 'd'], 2);
