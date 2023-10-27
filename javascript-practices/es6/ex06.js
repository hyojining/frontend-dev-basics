/**
 * 구조 분해(Destructing)
 * 
 */

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const {firstName} = user; // = 왼쪽은 const나 let이 꼭 붙어야 함

console.log(firstName);

if(1==1){};
function f(){};
const o = {};

{
    no: 10
}

{
    console.log("!!!")
}