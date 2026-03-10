const http = require('http')
const url = require('url')
const fs = require('fs')


let myUrl;
const server = http.createServer((req,res)=>{
    myUrl = url.parse(req.url,true)
    const path = myUrl.pathname;
    let myId;
    if(myUrl.query){
    myId = myUrl.query.id;
    }
    console.log(path);
    
    if(path==='/notes'){
        const data = JSON.parse(fs.readFileSync('todo.json'))

        res.end(
            JSON.stringify(data)
        )
    }else if(path==='/note'){
        const data = JSON.parse(fs.readFileSync('todo.json'))
        data.forEach((k)=>{
            if(k.id === Number(myId)){
                res.end(
            JSON.stringify(k)
        )
            }
        })

        
    }
    
    
})

server.listen(3000,()=>{
    console.log("Server Started");
    
})