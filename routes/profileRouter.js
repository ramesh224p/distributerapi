var express = require('express'),
    router = express.Router(),
    profileController = require('../controller/profileController'),
    pc = new profileController();

router.get('', pc.get.bind(pc));

router.post('', pc.create.bind(pc));

module.exports = router;