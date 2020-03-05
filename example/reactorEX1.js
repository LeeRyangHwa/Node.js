const fs = require('fs');

//동기예제
//const data = fs.readFileSync('file.md');
//console.log(data);

//비동기예제
fs.readFile('file.md',(err, data)=>{
    if(err)throw err;
    console.log(data);
});
