/**
 * URL 다루기
 * 
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com"

// 예1) 리다이렉트
// window.location.href = url;
//
// 예2) ajax 통신
// $.ajax(url)
// fetch(url, 옵션)


// 1. escape: URL 전부를 encoding 사용(x), deprecated
// 몇 가지 특수 문자 (예: +, &, =)를 올바르게 처리하지 못하는 문제
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 전체 중 파라미터만 encoding한다. url 전체를 encoding 해야하는 경우(o)
// URL의 특수 문자와 일부 예약 문자를 처리한다. 그러나 /, ?, =, &, # 등은 여전히 유효한 문자로 유지된다. 
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: URL 중에 값만 Encoding 해야하는 경우 사용한다.
// 거의 모든 특수 문자와 예약 문자를 처리하며, 모든 문자를 안전하게 인코딩한다.
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. encodeURIComponent 사용 예
// 만들어야 하는 url: "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com"
var url = "http://www.mysite.com/user";
var formData = {
    name: "둘리",
    email: "dooly@gmail.com"
}

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));
console.log(`${url}?${toQueryString(formData)}`);