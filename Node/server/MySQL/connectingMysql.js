var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'huang',
  database: 'test'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) {
//     console.log(error);
//     throw Error('连接失败');
//   } 
//   console.log('The solution is: ', results[0].solution);
// });

//
var sql = 'SELECT * FROM websites';
//查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('err:', err);
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result);
  console.log('------------------------------------------------------------\n\n');
});

connection.end();