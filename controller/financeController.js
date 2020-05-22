var financeModel=require('../model/financemodel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');
    

function financeController() {
    fm= new financeModel();
    controllerUtills = new _controllerUtills();
}

financeController.prototype.getAll=function(req, res, next){
    controllerUtills.getAll(fm, req, res, next);
}

financeController.prototype.getById=function(req, res, next){
    controllerUtills.getById(fm, req, res, next);
}

financeController.prototype.create=function(req, res, next){
    controllerUtills.create(fm, req, res, next);
}

financeController.prototype.update=function(req, res, next){
    controllerUtills.update(fm, req, res, next);
}

financeController.prototype.remove=function(req, res, next){
    controllerUtills.remove(fm, req, res, next);
}

module.exports=financeController;