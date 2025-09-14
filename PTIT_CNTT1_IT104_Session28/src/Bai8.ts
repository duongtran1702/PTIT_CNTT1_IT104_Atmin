type MyFilterCallback<T> = (element: T, search: T) => boolean;

// Hàm myFilter
function myFilter<T>(
    array: T[],
    search: T,
    callback: MyFilterCallback<T>
): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], search)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Callback để so sánh
const isMatch: MyFilterCallback<number> = (element, search) => {
    return element === search;
};

// Gọi hàm
const numbers = [10, 20, 30, 20, 40];
const found = myFilter(numbers, 20, isMatch);

console.log(found);
