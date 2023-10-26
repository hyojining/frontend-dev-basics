/**
 * const: 블록 범위의 상수
 * 
 */

// 1. 블록 범위
try {
    if(true){
        const num = 10; // const로 선언한 변수는 블록 내에서만 유효
    }

    console.log(num); // ReferenceError

} catch(e) {
    console.error("error:" + e);
}

// 2. 대입(assignment) 에러
try {
    const num = 10;
    num =20; // const로 선언된 변수는 한 번 할당된 값을 변경할 수 없음

    console.log(num); // TypeError
    
} catch(e) {
    console.error("error:" + e);
}