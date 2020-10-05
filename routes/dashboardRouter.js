var express = require('express'),
    router = express.Router(),
    dashboardcontroller = require('../controller/dashboardcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    auth=require('../utils/authentication'),
    dc = new dashboardcontroller();

router.get('/', verifyToken.auth, dc.getAll.bind(dc));

module.exports = router;