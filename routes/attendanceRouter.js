var express = require('express'),
    router = express.Router(),
    attendanceController = require('../controller/attendanceController'),
    ac = new attendanceController;

router.post('/', ac.create.bind(ac));

router.put('/:id', ac.update.bind(ac));

module.exports = router;