var express = require('express'),
    router = express.Router(),
    defaultpasscontroller = require('../controller/defaultpasscontroller'),
    dpc = new defaultpasscontroller();

router.put('/:id', dpc.update.bind(dpc));

module.exports = router;