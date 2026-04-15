const fs = require("fs");

try {

    // write file
    fs.writeFileSync('config.txt', "Server Port:3000\n");

    // append data
    fs.appendFileSync('config.txt', "Environment:Production\nDatabase:MongoDB\n");

    // read file
    const data = fs.readFileSync('config.txt', 'utf8');
    console.log(data);

    // copy file
    fs.copyFileSync('config.txt', 'config_backup.txt');
    console.log("File copied");

    // rename file
    fs.renameSync('config_backup.txt', 'backup_config.txt');

    // delete original file
    fs.unlinkSync('config.txt');
    console.log("Original Config File deleted");

} catch (err) {
    console.log(err);
}