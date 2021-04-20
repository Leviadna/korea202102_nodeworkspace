/*
node.js는 브라우저 탑재된 자바스크립트와는 목적이 다르다.
즉, 응용프로그램 개발 중 주로 서버를 개발할 때 많이 사용된다.
node.js는 자체 기능이 많지 않다
따라서 주로 모듈을 이용하여 프로그램을 개발한다.
*/
var http=require("http"); //웹기본 서버 모듈, 이것만 있어도 기본적인 웹서버 구축 가능

var server = http.createServer(); //서버 객체 생성

//생성된 서버 객체를 통해 서버를 가동하자
server.listen(9999, function(){
    console.log("My Server is running at 9999 port...");
});