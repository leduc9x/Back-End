const mysql = require('mysql');

const db = mysql.createConnection({
  host:  "localhost",
  user:  "root",
  password:  "1234",
  database:  "web-database"
});

module.exports = db