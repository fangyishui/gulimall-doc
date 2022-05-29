"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var util = {
    sum: function sum(a, b) {
        return a + b;
    }
};

exports.util = util;

// `export` 不仅可以导出对象 ，一切JS变量都可以导出。
// 比如：基本类型变量，函数，数组，对象


// export const util = {
//     sum(a,b){
//     return a + b;
//     }
//     }