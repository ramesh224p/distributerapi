var express = require('express'),
    router = express.Router(),
    dashboardController = require('../controller/dashboardController'),
    verifyToken=require('../utils/authtoken'),
    vt = new verifyToken(),
    auth=require('../utils/authentication'),
    dcr = new dashboardController();

router.get('/', dcr.getAll.bind(dcr));

module.exports = router;