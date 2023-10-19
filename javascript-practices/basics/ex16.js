/**
 * 자바스크립트 함수: function 타입의 객체
 * 
 */

console.log("====== 함수를 생성하는 방법1: 함수 리터럴 ======");
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));


console.log("====== 함수를 생성하는 방법2: 함수 리터럴 ======");
var f2 = function(a, b){
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));


console.log("====== 함수를 생성하는 방법3: 화살표 함수(es6) ======");
var f3 = (a, b) => a + b;
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));


console.log("====== 함수를 생성하는 방법4: new와 함께 Function 생성자 함수를 사용하는 방법 ======");
var f4 = new Function('a', 'b', 'return a+b;');
console.log(typeof(f4), f4 instanceof Function, f4(10, 20));


// setTimeout 함수를 사용하여 10밀리초 후에 실행되는 익명 함수를 정의하고 있다. 
// 익명 함수는 함수 이름을 가지지 않고 직접 함수를 정의하고 실행하는 것이 가능하다.
console.log("====== 함수를 생성하는 방법5: 익명(anonymous) 함수 ======");
setTimeout(function() {
    console.log('time out!');
}, 10);


// 함수를 정의와 동시에 호출한다.
console.log("====== 익명 함수의 또 다른 예: 함수 정의 후, 즉시 실행을 한 번만 하는 함수 ======");
var r = (function(a, b) {
    var m = 10;
    return a / m + b / m;
})(10, 20);
console.log(r);


// 가변 파라미터: 함수가 임의의 수의 인수를 받을 수 있는 기능
// arguments는 함수 내에서 사용 가능한 특별한 객체로, 함수에 전달된 모든 인수를 포함한다. 
// 이 객체는 배열과 유사한 구조를 가지지만 진짜 배열이 아니다.
var sum = function() {
    
    // Array (x), Object (o)
    console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);
    
    var sum = 0;
    
    // for(var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    // error: 유사배열
    // arguments의 __proto__는 Object.prototype에 chain이 되어있기 때문에 forEach를 호출할 수 없다. (arguments는 Object 인스턴스다.)
    // arguments 객체는 배열이 아니므로 배열 메서드 (예: forEach)를 직접 사용할 수 없다.
    // arguments.forEach(function(e) {
    //     sum += e;
    // })

    Array.prototype.forEach.call(arguments, function(e) {
        sum += e;
    });

    return sum;
};

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));