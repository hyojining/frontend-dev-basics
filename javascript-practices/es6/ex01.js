/**
 * let & const
 * 
 */

// let 블록 범위
try {
    if(true) {
        var i = 10;
        let j = 20; // let으로 선언한 변수는 선언된 블록 내에서만 유효
    }

    console.log(i);
    console.log(j); // ReferenceError
    
} catch(e) {
    console.error("error:" + e);
}