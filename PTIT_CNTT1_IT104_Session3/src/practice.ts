enum SystemMode {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL',
}

type Direction = 'left' | 'right' | 'forward' | 'backward';
const logMovement = (direction: Direction): string => {
    return `Moving ${direction}`;
};

const setMode = (systemMode: SystemMode): string => {
    return `System set to ${systemMode} mode`;
};

const processInput = (input: any): any => {
    if (typeof input === 'string') console.log(`Input length: ${input.length}`);
    else console.log(`Input length: ${input}`);
};

const validateInput = (input: unknown) => {
    if (typeof input === 'number')
        console.log(`Recieved input (any): ${input}`);
    else console.log('Invalid input type');
};

const crash = (message: string): never => {
    throw new Error(message);
};

try {
    crash('SYSTEM CRASHED: Overhead detected!');
} catch (error) {
    //fail logic
    console.log(error);
}

console.log(logMovement('left'));
console.log(logMovement('right'));

setMode(SystemMode.AUTO);
processInput('hello');
processInput(10);
