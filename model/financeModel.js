var connection = require('../utils/mysql/mysql');

function financeModel(){
    this.mysql= connection;
}

financeModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM finance', function (err, result){
        callback(err, result);
    })
}

financeModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM finance WHERE id='+id, function (err, result){
        callback(err, result);
    })
}

financeModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO finance SET?', data, function (err, result){
        callback(err, {data, result});
    })
}

financeModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE finance SET? WHERE id='+id, data, function (err, result){
        callback(err, result);
    })
}
financeModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM finance where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=financeModel;