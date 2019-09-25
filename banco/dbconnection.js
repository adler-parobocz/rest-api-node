const mysql = require('mysql');

const conexao = mysql.createPool({
    host: '192.168.151.197',
    user: 'root',
    password: 'M3rc3d3s@17',
    database: 'jpa'
});

module.exports = conexao;