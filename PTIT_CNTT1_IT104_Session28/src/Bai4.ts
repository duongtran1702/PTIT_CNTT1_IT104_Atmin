type CallBackV4 = (num: number) => void;

const displayNumbers = (delay: number, callback: CallBackV4): void => {
    let count = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delay);
};

const printNumber: CallBackV4 = (num: number): void => {
    console.log(`Số thứ tự: ${num}`);
};

displayNumbers(1000, printNumber);
