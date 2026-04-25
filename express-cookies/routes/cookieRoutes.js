const express = require('express')
const router = express.Router()

router.get('/set-cookie',(req,res)=>{
    res.cookie("name","Sec FB",{
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:false
    })

    res.send("Cookies are set!")
})




router.get('/get-cookie',(req,res)=>{
    const data = req.cookies.name;
    if(data){
        res.send(data)
    }else{
        res.send("set the cookies first!")
    }
})





router.get('/delete-cookie',(req,res)=>{
    res.clearCookie("name");
    res.send("Cookie Deleted!")
})




module.exports = router