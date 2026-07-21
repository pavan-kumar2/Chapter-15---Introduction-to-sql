const mySql = require('mysql2');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pAVAN@2%',
    database: 'airbnb',
})

module.exports = pool.promise();