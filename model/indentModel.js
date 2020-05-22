var connection = require('../utils/mysql/mysql');

function indentModel(){
    this.mysql= connection;
}

indentModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM indents', function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM indents WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO indents SET?', data, function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.update=function(callback){
    this.mysql.query('UPDATE indents SET? WHERE', function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.remove=function(callback){
    this.mysql.query('DELETE FROM indents WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

module.exports=indentModel;