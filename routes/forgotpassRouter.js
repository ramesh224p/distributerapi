var express = require('express'),
    router = express.Router(),
    forgotpasscontroller = require('../controller/forgotpasscontroller');
fpc = new forgotpasscontroller();


router.get('/', fpc.getAll.bind(fpc));
router.put('/:id', fpc.update.bind(fpc));

module.exports = router;