var express = require('express'),
    router = express.Router(),
    dashboardcontroller = require('../controller/dashboardcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    auth=require('../utils/authentication'),
    dc = new dashboardcontroller();

router.get('/', vt.auth, dc.getAll.bind(dc));

module.exports = router;