var connection = require('../mysql/mysql');

function indentModel(){
    this.mysql = connection;
}

indentModel.prototype.getAll=function(callback){
    this.mysql.query('select * from indent', function(err, data){
        callback(err, data);
    });
}

indentModel.prototype.getById=function(id, callback){
    this.mysql.query('select * from indent where id='+id, function(err, data){
        callback(err, data);
    });
}

indentModel.prototype.create=function(data, callback){
    this.mysql.query('insert into indent set?',data,function(err, data){
        callback(err, data);
    });
}

indentModel.prototype.update=function(id, data, callback){
    this.mysql.query('update indent set? where id='+id, data, function(err, data){
        callback(err, data);
    });
}

indentModel.prototype.remove=function(id, callback){
    this.mysql.query('delete from indent where id='+id, function(err, data){
        callback(err, data);
    });
}

module.exports=indentModel;