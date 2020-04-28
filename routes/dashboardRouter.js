var express = require('express'),
    router = express.Router(),
    dashboardcontroller = require('../controller/dashboardcontroller'),
    verifyToken=require('../utils/authtoken'),
    vt = new verifyToken(),
    auth=require('../utils/authentication'),
    dcr = new dashboardcontroller();

router.get('/', dcr.getAll.bind(dcr));

module.exports = router;