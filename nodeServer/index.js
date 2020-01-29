//http모듈 사용
var http = require('http');

//http모듈로 서버를 생성
var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.write('<h1>시작</h1>')
    response.end('Hello node.js!');
    
});
//8080포트 서버실행
server.listen(8080, function(){
    console.log('Server is running...');
});

