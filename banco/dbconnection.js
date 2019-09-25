const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'host',
    user: 'user',
    password: 'pass',
    database: 'database'
});

module.exports = conexao;