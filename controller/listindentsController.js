var listindentsModel=require('../model/listindentsModel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function listindentsController(){
    lim= new listindentsModel();
    controllerUtills = new _controllerUtills();
}

listindentsController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(lim, req, res, next);
}

listindentsController.prototype.getById=function(req, res, next){
    controllerUtills.getById(lim, req, res, next);
}

listindentsController.prototype.create=function(req, res, next){
    controllerUtills.create(lim, req, res, next);
}

listindentsController.prototype.update=function(req, res, next){
    controllerUtills.update(lim, req, res, next);
}

listindentsController.prototype.remove=function(req, res, next){
    controllerUtills.remove(lim, req, res, next);
}

module.exports=listindentsController;