/**
 * template literal
 * 
 */

const no = 10;
const name = '둘리';
const email = 'dooly@gmail.com';

// ex01
console.log("no: "+ no + ", name: " + name + ", email: " + email);
console.log(`no: ${no}, name: ${name}, email: ${email}`); // 템플릿 리터럴 사용

// ex02: 다중행
console.log(`
no: ${no}
name: ${name}
email: ${email}
`); // 템플릿 리터럴을 사용하면 다중 행 문자열도 쉽게 작성 가능