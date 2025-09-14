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
const printArray = (e, idx) => {
    console.log(`Element ${idx + 1}:${e}`);
};
const processArray = (array, callback) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        let count = 0;
        array.forEach((e, idx) => {
            setTimeout(() => {
                callback(e, idx);
                count++;
                if (count === array.length)
                    resolve();
            }, 1000 * (idx + 1));
        });
    });
});
processArray([1, 2, 3, 4, 5, 6], printArray);
