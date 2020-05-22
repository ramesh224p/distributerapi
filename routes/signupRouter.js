var express= require('express'),
	router= express.Router(),
	signupController= require('../controller/signupcontroller');
	suc= new signupController();

router.post('/', suc.create.bind(suc));

module.exports=router;