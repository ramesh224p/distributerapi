var connection = require('../mysql/mysql');

function inventoryModel(){
    this.mysql = connection;
}

inventoryModel.prototype.getAll=function(callback){
    this.mysql.query('select * from inventory', function(err, data){
        callback(err, data);
    });
}

inventoryModel.prototype.getById=function(id, callback){
    this.mysql.query('select * from inventory where id='+id, function(err, data){
        callback(err, data);
    });
}

inventoryModel.prototype.create=function(data, callback){
    this.mysql.query('insert into inventory set?',data,function(err, data){
        callback(err, data);
    });
}

inventoryModel.prototype.update=function(id, data, callback){
    this.mysql.query('update inventory set? where id='+id, data, function(err, data){
        callback(err, data);
    });
}

inventoryModel.prototype.remove=function(id, callback){
    this.mysql.query('delete from inventory where id='+id, function(err, data){
        callback(err, data);
    });
}

module.exports=inventoryModel;