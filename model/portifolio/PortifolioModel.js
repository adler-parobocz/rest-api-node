const db = require('../../banco/dbconnection');

module.exports = class PorfolioModel {

    static getTodos(callback) {
       return db.query("select * from portifolio", callback);
    }

    static getId(id, callback) {
        return db.query("select * from portifolio where id_portifolio = ?", [id], callback);
    }

    static adicionar(portifolio, callback) {
        return db.query("insert into portifolio (descricao, detalhes) values (? , ?)",
        [
            portifolio.descricao, portifolio.detalhes
        ]
        , callback);
    }

    static deletar(id, callback) {
        return db.query("delete from portifolio where id_portifolio = ?", [id], callback);
    }

    static editar(portifolio, callback) {
        return db.query("update portifolio set descricao = ?, detalhes = ? where id_portifolio = ?", 
        [
            portifolio.descricao, portifolio.detalhes, portifolio.id_portifolio 
        ]
        , callback);
    }

};