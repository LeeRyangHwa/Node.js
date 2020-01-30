//http모듈 사용
var http = require('http');
var fs = require('fs');

//요청한 url을 객체로 만들기 위해 url모듈 사용
var url = require('url');
//요청한 url 중에 Quert String을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

//http모듈로 서버를 생성
var server = http.createServer(function(request,response){

    var parsedUrl = url.parse(request.url);

    console.log(parsedUrl);
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');

    console.log(parsedQuery.test);


    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    
    //index.html 연결
    if(request.method == 'GET' && request.url == '/'){
        fs.createReadStream("./index.html").pipe(response);
    }
    
});
//8080포트 서버실행
server.listen(8080, function(){
    console.log('Server is running...');
});

