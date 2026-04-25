const express = require('express')
const router = require('./routes/cookieRoutes.js');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(cookieParser())

app.use('/',router);


app.listen(5000,()=>{
    console.log("Server Started");
    
})
