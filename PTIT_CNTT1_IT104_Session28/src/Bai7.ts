// Định nghĩa kiểu callback
type MyCallback<T> = (element: T, index: number, array: T[]) => void;

// Hàm myForEach
function myForEach<T>(array: T[], callback: MyCallback<T>): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Hàm callback in ra thông tin
const printElement: MyCallback<number> = (element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
};

// Gọi hàm
myForEach([1,2,3,4,5,6,7,8,9], printElement);
