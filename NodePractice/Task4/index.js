const http = require('http');
const path = require('path');

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(path.parse(url,true))
    ;
    
    res.end();
})

server.listen(3333,()=>{
    console.log("Server Started");
    
})
