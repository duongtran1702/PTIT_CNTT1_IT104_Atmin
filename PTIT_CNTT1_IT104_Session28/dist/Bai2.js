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
// 2. Viết hàm delayedCallback trả về Promise<void>
const delayedCallback = (callback, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback(); // gọi callback
            resolve(); // báo hiệu Promise hoàn tất
        }, delay);
    });
};
// 3. Viết callback cụ thể
const printMessage = () => {
    console.log('✅ Callback is called after 2 seconds!');
};
// 4. Hàm chạy với async/await
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('🚀 Start ...');
    yield delayedCallback(printMessage, 2000); // đợi 2 giây
    console.log('🏁 Finish ....');
});
// 5. Gọi hàm run
run();
