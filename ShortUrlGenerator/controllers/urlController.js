const { nanoid } = require('nanoid')
const urlModel = require('../models/urlModel.js');


const generateShortUrl = async (req, res) => {
    
    try {
        
         console.log(req.body);
        const url = req.body.actUrl;
       
        
        if (!url) {
            return res.status(400).json({ message: "Url is required" })
        }
        const shortURL = nanoid(7)
        const data = await urlModel.create({
            actualUrl: url,
            shortUrl: shortURL
        })

        res.json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }

}



module.exports = generateShortUrl