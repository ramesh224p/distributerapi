var connection = require('../utils/mysql/mysql');

function branchModel(){
    this.mysql= connection;
}

branchModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM branches', function (err, result){
        callback(err, result);
    })
}

branchModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM branches WHERE id='+id, function (err, result){
        callback(err, result);
    })
}

branchModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO branches SET?', data, function (err, result){
        callback(err, { data, result});
    })
}

branchModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE branches SET? WHERE id='+id, data, function (err, result){
        callback(err, result);
    })
}
branchModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM branches where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=branchModel;