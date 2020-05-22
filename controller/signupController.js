var signupModel= require('../model/signupmodel'),
	_controllerUtills = require('../utils/controllerUtill/controllerUtils');

function signupController(){
	sm= new signupModel();
	controllerUtills = new _controllerUtills();
}

signupController.prototype.create=function(req, res, next){
	controllerUtills.create(sm, req, res, next);
}	

module.exports=signupController;