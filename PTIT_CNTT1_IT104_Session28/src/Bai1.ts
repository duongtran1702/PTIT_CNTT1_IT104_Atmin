type CallBackV1 = (result: number) => void;

const calculate = (a: number, b: number, callback: CallBackV1) => {
    const sum: number = a + b;
    callback(sum);
};

const printResult: CallBackV1 = (result: number) => {
    console.log(result);
};

calculate(3, 7, printResult);
