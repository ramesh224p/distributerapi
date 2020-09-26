var connection = require('../utils/mysql/mysql'),
    inventoryModel = require ('../model/inventoryModel');

function inventoryAssignModel(){
    this.mysql= connection;
    im= new inventoryModel();
}

inventoryAssignModel.prototype.getAll=function(params, callback){
    this.mysql.query('SELECT * FROM inventory_assign', function(err, result){
        callback(err, result)
    })
}

inventoryAssignModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM inventory_assign WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

inventoryAssignModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO inventory_assign SET ? ',data, function(err, result){
        console.log(err, data);
        if(result){
            im.update(data.inventory_id, {status : 2}, function(err,data){
            });
        }
        callback(err, result)
    })
}

inventoryAssignModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE inventory_assign SET? WHERE id='+id, data, function(err, result){
        callback(err, result)
    })
}

inventoryAssignModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM inventory_assign WHERE id='+id, function(err, result){
        callback(err, result)
    })
}

module.exports=inventoryAssignModel;