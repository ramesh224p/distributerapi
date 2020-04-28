var connection = require('../mysql/mysql');

function complaintsModel(){
    this.mysql= connection;
}

complaintsModel.prototype.getAll=function(callback){
    this.mysql.query('SELECT * FROM complaints', function (err, result){
        console.log(err, result);
        callback(err, result);
    
    })
}

complaintsModel.prototype.getById=function(id, callback){
    console.log(id);
    this.mysql.query('SELECT * FROM complaints WHERE id='+id, function (err, result){
        console.log(err, result);
        callback(err, result);
    })
}

complaintsModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO complaints SET?', data, function (err, result){
        callback(err, result);
    })
}

complaintsModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE complaints SET? WHERE id='+id, data, function (err, result){
        callback(err, result);
    })
}
complaintsModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM complaints where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=complaintsModel;