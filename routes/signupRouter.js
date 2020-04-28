var express= require('express'),
	router= express.Router(),
	signupController= require('../controller/signupcontroller');
	src= new signupController();

router.post('/', src.create.bind(src));

module.exports=router;