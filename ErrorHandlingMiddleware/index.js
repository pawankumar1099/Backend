const express = require('express')
const errorHandler = require('./middleware/errorHandler.js')

const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to Homepage!!!!!!!!!!")
})



app.use((req,res,next)=>{
    const err = new Error("Page not Found");
    err.statusCode = 404
    err.status = "Fail"
    next(err)
})

app.use(errorHandler)

app.listen(3000,()=>{
    console.log("Server Started");
})