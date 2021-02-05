var express = require('express'),
    router = express.Router(),
    uploadController = require('../controller/uploadController'),
    uc = new uploadController();

router.post('', uc.create.bind(uc));

module.exports=router;