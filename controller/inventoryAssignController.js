var inventoryAssignModel= require('../model/inventoryAssignModel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function inventoryAssignController(){
    iadm= new inventoryAssignModel();
    controllerUtills = new _controllerUtills();
}

inventoryAssignController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(iadm, req, res, next);
}

inventoryAssignController.prototype.getById=function(req, res, next){
    controllerUtills.getById(iadm, req, res, next);
}

inventoryAssignController.prototype.create=function(req, res, next){
    controllerUtills.create(iadm, req, res, next);
}

inventoryAssignController.prototype.update=function(req, res, next){
    controllerUtills.update(iadm, req, res, next);
}

inventoryAssignController.prototype.remove=function(req, res, next){
    controllerUtills.remove(iadm, req, res, next);
}

module.exports=inventoryAssignController;