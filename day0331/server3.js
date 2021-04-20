/*
클라이언트 요청에 응답을 처리해보자
*/
var http = require("http");

var server = http.createServer(function(request, response){
    //클라이언트의 요청 및 응답처리를 이 익명함수로 처리 가능
    //응답 보내기
    //table 태그를 클라이언트로
    var tag = "<table border='1px'>";
    tag+="<tr>";
    tag+="<td>apple</td>";
    tag+="<td>banana</td>";
    tag+="</tr>";
    tag+="</table>";

    response.end(tag); //웹브라우저가 해석할 수 있는 데이터를 보내면 된다
});

//서버 가동 후 클라이언트의 접속 기다리기
server.listen(7777, function(){
    console.log("Third Server is running at 8888 port...");
});