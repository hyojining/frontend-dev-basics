/**
 * Function.prototype.bind
 * Function.prototype.apply
 * Function.prototype.call
 * 
 */

var myObject = {
    v: 'me',
    f1: function() {
        console.log(this.v);
    },
    f2: function(param1, param2) {
        console.log(param1 + " " + param2 + " " + this.v);
    }
};

var yourObject = {
    v: 'you'
};

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수(myObject.f1)의 this를 파라미터로 전달되는 객체로 바꾼다.
// myObject 객체의 f1 함수를 호출하되, apply 메서드를 사용하여 함수 내부에서 this를 yourObject 객체로 변경한다.
myObject.f1.apply(yourObject);

// call: 호출되는 함수(myObject.f2)의 this를 첫 번째 파라미터로 전달되는 객체를 바꾸고 다른 파라미터들도 전달할 수 있다.
// myObject 객체의 f2 함수를 호출하되, call 메서드를 사용하여 함수 내부에서 this를 yourObject 객체로 변경하고, 두 개의 문자열 파라미터를 전달한다. 
myObject.f2.call(yourObject, "hello", "again");

// bind: 호출되기 전에 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꾼다.
// f3 함수는 myObject 객체와 바인딩되며, 이 함수를 호출하면 myObject의 v 값을 출력한다.
var f3 = function() {
    console.log(this.v);
}.bind(myObject);

f3();