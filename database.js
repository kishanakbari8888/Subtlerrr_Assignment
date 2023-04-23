const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8613990',
  password: 'Cry9uQE9Dg',
  database: 'sql8613990',
});


module.exports = connection;

