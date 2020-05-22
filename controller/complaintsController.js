var complaintsModel=require('../model/complaintsModel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');
    

function complaintsController(){
    cm= new complaintsModel();
    controllerUtils = new _controllerUtills();
}

complaintsController.prototype.getAll=function(req, res, next){
    controllerUtils.getAll(cm, req, res, next);
}

complaintsController.prototype.getById=function(req, res, next){
    controllerUtils.getById(cm, req, res, next);
}

complaintsController.prototype.create=function(req, res, next){
    controllerUtils.create(cm, req, res, next);
}

complaintsController.prototype.update=function(req, res, next){
    controllerUtils.update(cm, req, res, next);
}

complaintsController.prototype.remove=function(req, res, next){
    controllerUtils.remove(cm, req, res, next);
}

module.exports=complaintsController;