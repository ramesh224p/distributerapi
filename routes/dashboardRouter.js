var express = require('express'),
    router = express.Router(),
    dashboardcontroller = require('../controller/dashboardcontroller'),
    authToken=require('../utils/auth/authtoken'),
    auth=require('../utils/authentication'),
    dc = new dashboardcontroller();

router.get('/', authToken.auth, dc.getAll.bind(dc));

module.exports = router;