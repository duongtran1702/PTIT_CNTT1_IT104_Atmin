// function checkElement(array, num) {
//     let found = false;
//     array.forEach((tmp) => {
//         if (tmp === num) found = true;
//     });
//     return found ? 'true' : 'false';
// }

// console.log(checkElement([1, 2, 3, 4, 5], 3));
// console.log(checkElement([1, 2, 3, 4, 5], 6));

// function checkElement(array, num) {
//     for (let x of array) {
//         if (x === num) return `true`;
//     }
//     return `false`;
// }

// console.log(checkElement([1, 2, 3, 4, 5], 3));
// console.log(checkElement([1, 2, 3, 4, 5], 6));

function checkElement(array, value) {
    return array.includes(value) ? 'true' : 'false';
}

console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));
