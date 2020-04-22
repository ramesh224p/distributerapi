var express = require('express'),
    router = express.Router(),
    defaultPassController = require('../controller/defaultpassController'),
    dpcc = new defaultPassController();

router.put('/:id', dpcc.update.bind(dpcc));

module.exports = router;