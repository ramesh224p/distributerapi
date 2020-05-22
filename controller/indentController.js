var indentModel= require('../model/indentModel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function indentController(){
    iml= new indentModel();
    controllerUtills = new _controllerUtills();
}

indentController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(iml, req, res, next);
}

indentController.prototype.getById=function(req, res, next){
    controllerUtills.getById(iml, req, res, next);
}

indentController.prototype.create=function(req, res, next){
    controllerUtills.create(iml, req, res, next);
}

indentController.prototype.update=function(req, res, next){
    controllerUtills.update(iml, req, res, next);
}

indentController.prototype.remove=function(req, res, next){
    controllerUtills.remove(iml, req, res, next);
}

module.exports=indentController;