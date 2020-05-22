var employeesModel=require('../model/employeesModel'),
    _controllerUtils = require('../utils/controllerUtill/controllerUtils');
    

function employeesController(){
    em= new employeesModel();
    controllerUtils = new _controllerUtils();
}

employeesController.prototype.getAll=function(req, res, next){
    controllerUtils.getAll(em, req, res, next);
}

employeesController.prototype.getById=function(req, res, next){
    controllerUtils.getById(em, req, res, next);
}

employeesController.prototype.create=function(req, res, next){
    controllerUtils.create(em, req, res, next);
}

employeesController.prototype.update=function(req, res, next){
    controllerUtils.update(em, req, res, next);
}

employeesController.prototype.remove=function(req, res, next){
    controllerUtils.remove(em, req, res, next);
}

module.exports=employeesController;