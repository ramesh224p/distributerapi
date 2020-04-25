var indentModel= require('../model/indentModel'),
    controllerUtil= require('../utils/controllerutils');

function indentControler(){
    dim= indentModel();
    dcu= controllerUtil();
}

indentControler.prototype.getAll=function(req, res, next){
    dcu.getAll(dim, req, res, next);
}

indentControler.prototype.getById=function(req, res, next){
    dcu.getById(dim, req, res, next);
}

indentControler.prototype.create=function(req, res, next){
    dcu.create(dim, req, res, next);
}

indentControler.prototype.update=function(req, res, next){
    dcu.update(dim, req, res, next);
}

indentControler.prototype.remove=function(req, res, next){
    dcu.remove(dim, req, res, next);
}

module.exports=indentControler;