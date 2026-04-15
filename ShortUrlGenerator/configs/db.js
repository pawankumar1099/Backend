const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/urlShortner")
        console.log("DB Connected!")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;