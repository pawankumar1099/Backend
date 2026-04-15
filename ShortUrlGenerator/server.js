const express = require('express')
const connectDB = require('./configs/db.js')
const router = require('./routers/urlRoutes.js')

const app = express();

app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/url',router)



app.listen(3000,()=>{
    console.log("Server Started")
    connectDB();
})