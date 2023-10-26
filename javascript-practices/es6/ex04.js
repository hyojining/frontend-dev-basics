/**
 * default parameter
 * 
 */

const print = function(strs, end='\n'){
    console.log(strs.join(end));
}

print(['Always', 'with', 'me']); // 개행으로 구분
print(['Always', 'with', 'me'], ' '); // 스페이스로 구분