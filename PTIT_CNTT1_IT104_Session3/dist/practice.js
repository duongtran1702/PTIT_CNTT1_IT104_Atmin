"use strict";
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `System set to ${systemMode} mode`;
};
const processInput = (input) => {
    if (typeof input === 'string')
        console.log(`Input length: ${input.length}`);
    else
        console.log(`Input length: ${input}`);
};
const validateInput = (input) => {
    if (typeof input === 'number')
        console.log(`Recieved input (any): ${input}`);
    else
        console.log('Invalid input type');
};
const crash = (message) => {
    throw new Error(message);
};
try {
    crash('SYSTEM CRASHED: Overhead detected!');
}
catch (error) {
    //fail logic
    console.log(error);
}
console.log(logMovement('left'));
console.log(logMovement('right'));
setMode(SystemMode.AUTO);
processInput('hello');
processInput(10);
