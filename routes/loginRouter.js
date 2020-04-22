var express = require('express'),
    router = express.Router(),
    loginController = require('../controller/loginController.js'),
    ldc = new loginController();

router.post('/', ldc.create.bind(ldc));

module.exports = router;