var branchModel=require('../model/branchmodel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');
    
function branchController(){
    bm= new branchModel();
    controllerUtils = new _controllerUtills();
}

branchController.prototype.getAll=function(req, res, next){
    controllerUtils.getAll(bm, req, res, next);
}

branchController.prototype.getById=function(req, res, next){
    controllerUtils.getById(bm, req, res, next);
}

branchController.prototype.create=function(req, res, next){
    controllerUtils.create(bm, req, res, next);
}

branchController.prototype.update=function(req, res, next){
    controllerUtils.update(bm, req, res, next);
}

branchController.prototype.remove=function(req, res, next){
    controllerUtils.remove(bm, req, res, next);
}

module.exports=branchController;