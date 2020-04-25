var connection = require('../mysql/mysql');

function complaintsModel(){
    this.mysql = connection;
}

complaintsModel.prototype.getAll=function(callback){
    this.mysql.query('select * from complaints', function(err, data){
        callback(err, data);
    });
}

complaintsModel.prototype.getById=function(id, callback){
    this.mysql.query('select * from complaints where id='+id, function(err, data){
        callback(err, data);
    });
}

complaintsModel.prototype.create=function(data, callback){
    this.mysql.query('insert into complaints set?',data,function(err, data){
        callback(err, data);
    });
}

complaintsModel.prototype.update=function(id, data, callback){
    this.mysql.query('update complaints set? where id='+id, data, function(err, data){
        callback(err, data);
    });
}

complaintsModel.prototype.remove=function(id, callback){
    this.mysql.query('delete from complaints where id='+id, function(err, data){
        callback(err, data);
    });
}

module.exports=complaintsModel;