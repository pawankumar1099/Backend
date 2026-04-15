const requestAge = require('./middlewares/middleware.js')



const express = require('express');
const app = express();
const port = 3000;



const router = express.Router();
router.use(requestAge);


app.get('/',(req,res)=> {
    res.send("welcome to Homepage!!")
})

app.get('/about',requestAge,(req,res)=> {
    res.send("welcome to about page!!")
})

router.get('/contact',(req,res)=> {
    res.send("welcome to contact page!!")
})

app.use(router)
app.listen(port,()=>{
    console.log("Server Started Successfully!");
    
})

//Operational Error
//Programming Error