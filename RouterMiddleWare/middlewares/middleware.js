const requestAge = (req, res, next) => {
    const age = req.query.age;
    if(!age){
        res.send("Please provide your Age");
    }else if(age<18){
        res.send("You are not Aloowed to Enter");
    }else{
        next();
    }
}

module.exports = requestAge;