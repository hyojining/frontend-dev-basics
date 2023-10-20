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
// 웹 브라우저에서 var 키워드로 전역 스코프에서 변수를 선언하면, 
// 해당 변수는 암묵적으로 전역 객체인 window 객체의 프로퍼티로 취급된다.
// var e = 'dooly@gmail.com';
// console.log(window.e, e); // dooly@gmail.com dooly@gmail.com