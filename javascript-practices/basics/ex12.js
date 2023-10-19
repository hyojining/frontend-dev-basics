/**
 * Array 확장(prototype 기반의 확장)
 * 배열 프로토타입(Array.prototype)에 사용자 정의 메서드 추가
 */

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(i = 0; i < value.length; i ++) {
        //     this.splice(index + i, 0, value[i]);
        // }

        // forEach 메소드: 배열의 각 요소에 대해 주어진 함수를 실행하는데 사용
        // 오류
        // 콜백함수 안의 this는 어휘상의 this와 일치하지 않는다.
        // 콜백 함수 내에서 this는 해당 콜백 함수 자체를 가리키며, 외부 함수 내에서 사용된 this와는 다르다.
        // value.forEach(function(e){
        //     this.splice(index++, 0, e);
        // });

        // 해결방법1: closure 사용하는 방법
        // 클로저는 다른 함수 내부에 중첩되어 있는 함수
        // 외부 함수의 this를 다른 변수에 할당한 다음, 클로저 내에서 그 변수를 사용한다. 
        // 이렇게 하면 외부 함수의 this 컨텍스트를 콜백 함수 내에서 참조할 수 있다.
        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });

        // 해결방법2
        // Function.prototype.bind() 함수를 사용한다.
        // 콜백 함수 블록 안의 this를 세팅할 수 있다.
        // Function.prototype.bind() 함수는 함수의 this 컨텍스트를 지정하는 데 사용된다. 
        // 이 함수를 사용하여 콜백 함수 내에서 this를 명시적으로 설정할 수 있다.
        var f = function(e){
            this.splice(index++, 0, e);
        }.bind(this); // this 현재 컨텍스트 -> 배열

        value.forEach(f);

    } else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2,3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);