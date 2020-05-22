var inventoryModel= require('../model/inventoryModel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function inventoryController(){
    idm= new inventoryModel();
    controllerUtills = new _controllerUtills();
}

inventoryController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(idm, req, res, next);
}

inventoryController.prototype.getById=function(req, res, next){
    controllerUtills.getById(idm, req, res, next);
}

inventoryController.prototype.create=function(req, res, next){
    controllerUtills.create(idm, req, res, next);
}

inventoryController.prototype.update=function(req, res, next){
    controllerUtills.update(idm, req, res, next);
}

inventoryController.prototype.remove=function(req, res, next){
    controllerUtills.remove(idm, req, res, next);
}

module.exports=inventoryController;