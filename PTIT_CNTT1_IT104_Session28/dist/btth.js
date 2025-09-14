"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
const runTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Run task 1');
    yield delay(1000);
    console.log('Task 1 done');
    console.log('Run task 2');
    yield delay(2000);
    console.log('Task 2 done');
    console.log('Run task 3');
    yield delay(1500);
    console.log('Task 3 done');
});
// runTasks();
const parallelTasks = () => {
    const taskA = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task A');
        }, 1500);
    });
    const taskB = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task B');
        }, 2000);
    });
    Promise.all([taskA, taskB])
        .then((res) => console.log('Res :', res))
        .catch((error) => console.log('Error :', error));
};
// parallelTasks();
// Hàm fetchData giả lập
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() < 0.5; // 50% thành công, 50% thất bại
            if (isSuccess) {
                resolve({ data: 'Success!' });
            }
            else {
                reject('Network Error!');
            }
        }, 1000);
    });
}
// Hàm handleData gọi fetchData và xử lý bằng try/catch
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetchData();
            console.log('Kết quả:', result);
        }
        catch (error) {
            console.error('Lỗi:', error);
        }
    });
}
// Gọi thử
handleData();
