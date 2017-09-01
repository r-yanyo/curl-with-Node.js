const http = require('http');

http.createServer((req,res)=>{
    console.log(req.method);    
    console.log(req.headers);
    res.end('Hello World!');
}).listen(3000);

console.log("server is listening with port 3000.");