var connection = require('../utils/mysql/mysql');

function indentModel(){
    this.mysql= connection;
}

indentModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM indent', function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM indent WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO indent SET?', data, function(err, result){
        callback(err, {data, result})
    })
}

indentModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE indent SET? WHERE id='+id, data, function(err, result){
        callback(err, result)
    })
}

indentModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM indent WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

module.exports=indentModel;