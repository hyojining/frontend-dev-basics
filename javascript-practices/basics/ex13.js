/**
 * 1. string primitive type (원시 타입)
 * 2. String 객체 함수: String.prototype.*
 * 
 */

// 배열처럼 인덱스를 통해 접근이 가능하다.
var str1 = 'Hello World';
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'hello';
var str3 = 'world';
var str4 = str2 + ' ' + str3;
console.log(str4);

// casting (타입 변환)
// 문자열과 다른 데이터 타입을 결합하면 자동으로 타입 변환이 발생한다.
var str5 = "5" + 5;
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2'); // 'string2'의 첫 인덱스를 찾음 => 8
console.log(index);

var index = str7.indexOf('string4'); // -1 (없는 경우)
console.log(index);

var str8 = str7.substring(10 /*first index*/, 13 /*last index-1*/); // index: 10, 11, 12
console.log(str8);

var a = str7.split(" "); // 문자열을 공백을 기준으로 분할하여 배열로 반환
console.log(a);