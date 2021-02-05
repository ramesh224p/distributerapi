var connection = require('../utils/mysql/mysql');

function listindentModel(){
    this.mysql= connection;
}

listindentModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM indents', function (err, result){
        callback(err, result)
    })
}

listindentModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM indents WHERE id='+id, function (err, result){
        callback(err, result)
    })
}

listindentModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO indents SET?',data, function (err, result){
        callback(err, {data, result})
    })
}

listindentModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE indents SET? WHERE id='+id, data, function (err, result){
        callback(err, result)
    })
}

listindentModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM indents WHERE id='+id, function (err, result){
        callback(err, result)
    })
}

module.exports=listindentModel;