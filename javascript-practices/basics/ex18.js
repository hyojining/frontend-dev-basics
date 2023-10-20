/**
 * 클로저(closure): 클로저는 함수와 그 함수가 정의되었을 때 변수 스코프(Lexical Scope)와의 조합
 * 
 * 1. 자유변수에 닫혀(closed, 엮여)있는 함수
 * 2. 클로저는 자신이 정의될 때의 스코프를 기억하고 있다.
 * 3. 클로저는 함수가 자신이 정의 되었을 때의 스코프를 기억하여 자신이 정의된 스코프 밖에서 호출되어도 그 스코프에 접근할 수 있는
 * 4. 왜 쓰냐?
 *    - 전역 변수 회피
 *    - 상태 유지*: useState
 *    - 정보은닉  : useState
 * 
 */

/* Lexical Scope */
var f1 = function() {
    const s = "Hello World"; // s 변수는 f1의 스코프에 정의됨
    const inner = function() {
        console.log(s); // inner 함수는 외부 함수 f1의 스코프에 접근 가능
    }
    inner(); // inner 함수 내에서 s 변수 출력
};

f1();

/* Closure */
const f2 = function() {
    const s = "Hello World"; // s 변수는 f2의 스코프에 정의됨
    const inner = function() {
        console.log(s); // inner 함수는 외부 함수 f2의 스코프에 접근 가능
    }
    return inner;
}

const closure = f2(); // f2 함수 호출 후 inner 함수 반환
closure(); // 반환된 inner 함수를 밖에서 호출, 여전히 f2의 스코프에 접근 가능