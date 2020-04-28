var express = require('express'),
    router = express.Router(),
    defaultpasscontroller = require('../controller/defaultpasscontroller'),
    dpcc = new defaultpasscontroller();

router.put('/:id', dpcc.update.bind(dpcc));

module.exports = router;