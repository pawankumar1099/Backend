const http =require('http');

const server = http.createServer((req,res)=>{
    const query = req.url;
    if(query === '/'){
        res.write("home")
    }else if(query === '/about'){
        res.write("about")
    }else if(query === '/api/user'){
        res.write(JSON.stringify({
 name: "Pawan",
 role: "Developer"
}))
    }
    res.end();
    
})


server.listen(2000,'localhost',()=>{
    console.log("Server Started");
    
})