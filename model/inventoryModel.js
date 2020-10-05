var connection = require('../utils/mysql/mysql'),
    redis = require('redis'),
    config = require('../config/config.json'),
    client = redis.createClient(config.Redis_PORT);

function inventoryModel(){
    this.mysql= connection;
}

inventoryModel.prototype.getAll=function(params, callback){
    var sql = '';
    if(params && Object.keys(params).length > 0){
        if(Object.keys(params).length){
            sql = sql + ' WHERE ';
        }
        if(params.status){
            sql = sql + '  status =' + params.status;
        }
        if(params.branch){
            sql = sql + '  branch =' + params.branch;
        }
    }  
    this.mysql.query('SELECT * FROM inventory '+sql , function (err, result){
        callback(err, result);
    }) 
}

inventoryModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM inventory WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

inventoryModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO inventory SET?',data, function(err, result){
        callback(err, {data, result});
    })
}

inventoryModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE inventory SET? WHERE id='+id, data, function(err, result){
        callback(err, {data, result});
    })
}

inventoryModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM inventory WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

module.exports=inventoryModel;