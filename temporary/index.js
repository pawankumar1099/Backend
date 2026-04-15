const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    // res.write("<h1>Hi there</h1>")
    // res.end("responses Ended")

    switch(req.url){
        case '/':
            fs.readFile('./pages/home.html',(err,data)=>{
                if(err){
                    console.error(err);
                }else{
                    res.write(data)
                }
                res.end();
                
            })
            
        case '/about':
            fs.readFile('./pages/about.html',(err,data)=>{
                if(err){
                    console.error(err);
                }else{
                    res.write(data)
                }
                res.end();
            })
            break;
        case '/profile':
            fs.readFile('./pages/profile.html',(err,data)=>{
                if(err){
                    console.error(err);
                }else{
                    res.write(data)
                }
                res.end();
            })
            break;
        default:
            res.write("<h1>Page not found</h1>")
    }
})

server.listen(8000,'localhost',()=>{
    console.log("Server Started at port 8000!");
    
})
