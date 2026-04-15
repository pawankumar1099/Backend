const fs = require("fs");

//const data = fs.readFileSync("file.txt", "utf8");
//console.log(data);

// const data = fs.writeFileSync("file.txt", "Hello");
// console.log(data);

// const data = fs.renameSync("file.txt", "newFile.txt");
// console.log(data);

// const data = fs.cpSync("file.txt", "newFile.txt");
// console.log(data);

// const data = fs.unlinkSync("file.txt");
// console.log(data);

const fd = openSync("newFile.txt","w+");

fs.writeFileSync(fd,"hello");








