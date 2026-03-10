const fs = require('fs');
const path = require('path');
const process = require('process')

const check = fs.existsSync('logs');


if(!check){
    fs.mkdirSync('logs');
}


process.chdir(path.join(__dirname,'logs'));

fs.writeFileSync('activity.txt',`${new Date}`)