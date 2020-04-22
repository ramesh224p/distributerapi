var connection = require('../mysql/mysql');

function financeModel(){
    this.mysql= connection;
}

financeModel.prototype.getAll=function(callback){
    console.log('finance')
    this.mysql.query('SELECT * FROM finances', function (err, result){
        callback(err, result);
    })
}

financeModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM finances WHERE id='+id, function (err, result){
        callback(err, result);
    })
}

financeModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO finances SET?', data, function (err, result){
        callback(err, result);
    })
}

financeModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE finances SET? WHERE id='+id, data, function (err, result){
        callback(err, result);
    })
}
financeModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM finances where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=financeModel;