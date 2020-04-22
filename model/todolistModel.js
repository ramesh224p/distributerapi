var connection= require('../mysql/mysql');

function todolistModel(){
    this.mysql=connection;
}

todolistModel.prototype.getAll=function(req, callback){
    this.mysql.query('SELECT * FROM todolist', function(err, result){
        callback(err, result);
    })
}

todolistModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM todolist WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

todolistModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO todolist SET?', data, function(err, result){
        callback(err, result);
    })
}

todolistModel.prototype.update=function(id, data, callback){
    this.mysql.query('update todolist set? where id='+id, data, function(err, result){
        callback(err, result);
    })
}

todolistModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM todolist WHERE iD='+id, function(err, result){
        callback(err, result);
    })
}

module.exports=todolistModel;