// Định nghĩa kiểu callback
type ConditionCallback = (result: boolean) => void;

// Hàm checkCondition
const checkCondition = (
    condition: boolean,
    callback: ConditionCallback
): void => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
};

// Callback function để in kết quả
const printResult2: ConditionCallback = (result: boolean): void => {
    if (result) {
        console.log("Điều kiện đúng ");
    } else {
        console.log("Điều kiện sai");
    }
};

// Gọi thử
checkCondition(true, printResult2);   
checkCondition(false, printResult2);  
