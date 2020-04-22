var express= require('express'),
	router= express.Router(),
	signupController= require('../controller/signupController');
	src= new signupController();

router.post('/', src.create.bind(src));

module.exports=router;