/**
 * 전역 객체(Global Object)
 * 
 * node: global
 * browser: window
 * 
 */

// node
global.n = '둘리';
console.log(global.n, n); // 둘리 둘리

var e = 'dooly@gmail.com';
console.log(global.e, e); // undefined dooly@gmail.com


// browser
// window.n = '둘리';
// console.log(window.n, n); // 둘리 둘리
//
// var e = 'dooly@gmail.com';
// console.log(window.e, e); // dooly@gmail.com dooly@gmail.com