var connection = require('../mysql/mysql');

function branchModel(){
    this.mysql= connection;
}

branchModel.prototype.getAll=function(callback){
    this.mysql.query('SELECT * FROM branch', function (err, result){
        console.log(err, result);
        callback(err, result);
    
    })
}

branchModel.prototype.getById=function(id, callback){
    console.log(id);
    this.mysql.query('SELECT * FROM branch WHERE id='+id, function (err, result){
        console.log(err, result);
        callback(err, result);
    })
}

branchModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO branch SET?', data, function (err, result){
        callback(err, result);
    })
}

branchModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE branch SET? WHERE id='+id, data, function (err, result){
        callback(err, result);
    })
}
branchModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM branch where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=branchModel;