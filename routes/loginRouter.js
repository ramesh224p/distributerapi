var express = require('express'),
    router = express.Router(),
    loginController = require('../controller/logincontroller.js'),
    lc = new loginController();

router.post('/', lc.create.bind(lc));

module.exports = router;