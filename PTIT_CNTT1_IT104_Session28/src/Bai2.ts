// 1. Định nghĩa kiểu callback
type CallBackV2 = () => void;

// 2. Viết hàm delayedCallback trả về Promise<void>
const delayedCallback = (
    callback: CallBackV2,
    delay: number
): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();   // gọi callback
            resolve();    // báo hiệu Promise hoàn tất
        }, delay);
    });
};

// 3. Viết callback cụ thể
const printMessage: CallBackV2 = (): void => {
    console.log('✅ Callback is called after 2 seconds!');
};

// 4. Hàm chạy với async/await
const run = async (): Promise<void> => {
    console.log('🚀 Start ...');
    await delayedCallback(printMessage, 2000); // đợi 2 giây
    console.log('🏁 Finish ....');
};

// 5. Gọi hàm run
run();
