var complaintsModel= require('../model/complaintsModel'),
    controllerUtil= require('../utils/controllerutils');

function complaintsControler(){
    dim= complaintsModel();
    dcu= controllerUtil();
}

complaintsControler.prototype.getAll=function(req, res, next){
    dcu.getAll(dim, req, res, next);
}

complaintsControler.prototype.getById=function(req, res, next){
    dcu.getById(dim, req, res, next);
}

complaintsControler.prototype.create=function(req, res, next){
    dcu.create(dim, req, res, next);
}

complaintsControler.prototype.update=function(req, res, next){
    dcu.update(dim, req, res, next);
}

complaintsControler.prototype.remove=function(req, res, next){
    dcu.remove(dim, req, res, next);
}

module.exports=complaintsControler;