var inventoryModel= require('../model/inventoryModel'),
    controllerUtil= require('../utils/controllerutils');

function inventoryControler(){
    dim= inventoryModel();
    dcu= controllerUtil();
}

inventoryControler.prototype.getAll=function(req, res, next){
    dcu.getAll(dim, req, res, next);
}

inventoryControler.prototype.getById=function(req, res, next){
    dcu.getById(dim, req, res, next);
}

inventoryControler.prototype.create=function(req, res, next){
    dcu.create(dim, req, res, next);
}

inventoryControler.prototype.update=function(req, res, next){
    dcu.update(dim, req, res, next);
}

inventoryControler.prototype.remove=function(req, res, next){
    dcu.remove(dim, req, res, next);
}

module.exports=inventoryControler;