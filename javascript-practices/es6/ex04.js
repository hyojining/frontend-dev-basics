/**
 * default parameter
 * 
 */

const print = function(strs, end='\n'){
    console.log(strs.join(end));
}

print(['Always', 'with', 'me']); // end 파라미터를 제공하지 않으면 자동으로 개행 문자를 사용
print(['Always', 'with', 'me'], ' '); // 스페이스로 구분