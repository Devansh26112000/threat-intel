const sqlite = require('sqlite3')


const connectionTOdatabase = new sqlite.Database('./myTi.sqlite');

module.exports=connectionTOdatabase;