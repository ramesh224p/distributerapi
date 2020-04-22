var express = require('express'),
    router = express.Router(),
    forgotPassController = require('../controller/forgotpassController');
fpc = new forgotPassController();


router.get('/', fpc.getAll.bind(fpc));
router.put('/:id', fpc.update.bind(fpc));

module.exports = router;