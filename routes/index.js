var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginRouter'));

router.use('/dashboard', require('./dashboardRouter'));

router.use('/forgotpass', require('./forgotpassRouter'));

router.use('/defaultpass', require('./defaultpassRouter'));

router.use('/signup', require('./signupRouter'));

router.use('/todolist', require('./todolistRouter'));

router.use('/branches', require('./branchRouter'));

router.use('/finances', require('./financeRouter'));

module.exports = router;