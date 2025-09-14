type CallBackV3 = (e: number, idx: number) => void;

const printArray: CallBackV3 = (e: number, idx: number) => {
    console.log(`Element ${idx + 1}:${e}`);
};

const processArray = async (
    array: number[],
    callback: CallBackV3
): Promise<void> => {
    return new Promise((resolve) => {
        let count = 0;
        array.forEach((e, idx) => {
            setTimeout(() => {
                callback(e, idx);
                count++;
                if (count === array.length) resolve();
            }, 1000 * (idx + 1));
        });
    });
};

processArray([1, 2, 3, 4, 5, 6], printArray);
