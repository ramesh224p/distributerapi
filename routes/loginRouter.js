var express = require('express'),
    router = express.Router(),
    controller = require('../controller/logincontroller.js'),
    dc = new controller();

router.post('/', dc.create.bind(dc));

module.exports = router;