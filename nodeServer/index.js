//http모듈 사용
var http = require('http');

//http모듈로 서버를 생성
var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>시작</h1>')
    response.end('Hello node.js!!');
    

});
<<<<<<< HEAD
//8080포트 서버실행
=======
//8080포트를 가진 서버실행한다.
//
>>>>>>> 9159a1f98a0eea79a60cff8c376ca184bde3abc1
server.listen(8080, function(){
    console.log('Server is running...');
});
