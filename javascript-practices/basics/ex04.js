/**
 * 변수의 범위(scope)
 * 
 * 1. 자바스크립트는 기본적으로 코드에서 변수의 범위를 알 수 있다.(정적 스코프, Lexical Scope)
 * 2. 자바스크립트의 scope
 *    1) 전역 범위
 *    2) ES6 이전(<= ES5)
 *       - 자바와 같은 블록 범위({})를 지원하지 않았다.
 *       - 함수 범위만 지원
 *       - var 키워드를 사용해야 함수 범위를 가진다.
 *       - 만일 사용하지 않으면 그 변수는 전역 범위를 가진다.(hoisting)
 *    3) ES6 이후(ES6 ~ EX2022)
 *       - 자바와 같은 블록 범위를 가진다.
 *       - let 키워드를 사용해서 블록 범위를 가지게 한다.
 *       - const 키워드는 블록 범위의 상수를 정의할 때 사용한다.
 *    4) 결론:
 *       const,let만 사용하고 둘 중에 하나를 반드시 붙히자!!!!!(안붙히면 전역 범위를 만든다: hoisting)
 *    
 */

var i = 20;
var f = function() {
    var i = 20; // 함수 범위 -> 함수 밖에서는 접근할 수 없다.
    j = 100;    // 전역 범위

    console.log(i);
    i = j - i;
}

f();
console.log(i); // 맨 처음 함수 밖에서 선언해준 변수
console.log(j); // 함수 안에서 var를 사용하지 않은 전역 변수


console.log("=== var 키워드는 함수 블록에서만 범위를 만든다.");
// if 문은 함수 내부가 아니라 블록 범위(block scope)를 생성하지 않는다. 
// 즉, if 블록 내에서 선언된 k 변수는 함수 내부가 아닌 전역 범위에서도 접근할 수 있다.
if(90 + 10 === 100){
    var k = 10;
}
console.log(k);

{
    // let: 블록 범위 변수를 생성하며 값을 업데이트할 수 있다.
    // const: 블록 범위 상수를 생성하며 한 번 할당된 값을 변경할 수 없다.
    let x = 1000;
    const PI = 3.14;

    x = 100;
    // PI = 0;  // assign error
}

// console.log(x);   // reference error
// console.log(PI);  // reference error