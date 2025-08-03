import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a number: ', (answer) => {
    const num = parseInt(answer);

    if (!isNaN(num)) {
        if (num % 2 === 0) {
            console.log(num + ' is an even number');
        } else {
            console.log(num + ' is an odd number');
        }
    } else {
        console.log(num + ' is not a number');
    }

    rl.close();
});

// const readlineSync = require('readline-sync');

// const input = readlineSync.question('Enter a number: ');
// const num = parseInt(input);

// if (isNaN(num) || input.trim() === '') {
//     console.log(`${input} is not a number`);
// } else {
//     if (num % 2 === 0) {
//         console.log(`${num} is an even number`);
//     } else {
//         console.log(`${num} is an odd number`);
//     }
// }
