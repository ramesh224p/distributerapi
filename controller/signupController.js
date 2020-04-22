var signupModel= require('../model/signupmodel');

function signupController(){
	srm= new signupModel();
}

signupController.prototype.create=function(req, res, next){
	console.log(req.body);
	srm.create(req.body, function(err, data){
		if(err){
			res.status(201).send({status:false,data:[]});
		} else {
			res.status(200).send({status:true,data:data});
		}
	});
}	

module.exports=signupController;