const {URL} = require('url')
const fs = require("fs")
const http = require("http");
const { log } = require('console');

// const myURL = new URL(
//   'https://www.example.com:8080/products/view?id=101#reviews'
// );

// console.log(myURL.parse("https://www.example.com:8080/products/view?id=101#reviews",true));

// console.log(myURL.protocol); 
// console.log(myURL.hostname); 
// console.log(myURL.pathname); 
// console.log(myURL.search);   
// console.log(myURL.hash);     



const server = http.createServer((req,res)=>{
    res.write("<h1>Heading</h1>");
    const myurl = req.url
    if(myurl!="/favicon.ico"){
        fs.appendFile('newFile.txt',`Time: ${new Date()}  request:${req.url} \n`, (err)=>{
        console.log(err);
        
    })

    }
    
    
    res.end("Server Started at port 8000!");
    
})

server.listen(8000,"localhost",(err)=>{
    if(err){
        console.log(err); 
        
    }else{
    
        console.log("Server Started at port 8000!");
    }
})
