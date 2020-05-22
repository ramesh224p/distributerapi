var todolistModel= require('../model/todolistmodel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function todolistController(){
    tdlm=new todolistModel();
    controllerUtills = new _controllerUtills();
}

todolistController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(tdlm, req, res, next);
}

todolistController.prototype.getById=function(req, res, next){
    controllerUtills.getById(tdlm, req, res, next);
}

todolistController.prototype.create=function(req, res, next){
    controllerUtills.create(tdlm, req, res, next);
}

todolistController.prototype.update=function(req, res, next){
    controllerUtills.update(tdlm, req, res, next);
}

todolistController.prototype.remove=function(req, res, next){
    controllerUtills.remove(tdlm, req, res, next);
}

module.exports=todolistController;