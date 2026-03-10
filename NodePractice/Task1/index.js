const fs = require('fs');
const task = process.argv[2];
const fileName = process.argv[3];

if(task === 'create') {
    fs.writeFile(fileName,"",(err)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("FileCreated");
        }
    })
}else if( task==='write'){
    const data = process.argv[3];
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("File Written");
        }
    })
}else  if( task==='read'){
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log(data);
        }
    })
}if( task==='delete'){
    fs.unlink(fileName,(err)=>{
        if(err){
            console.log(err);
            
        }
    })
}