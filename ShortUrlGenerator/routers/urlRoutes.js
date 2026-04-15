const express = require('express');
const generateShortUrl = require('../controllers/urlController.js')


const router = express.Router();

router.post('/',generateShortUrl)


module.exports=router;