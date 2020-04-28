var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginrouter'));

router.use('/dashboard', require('./dashboardrouter'));

router.use('/forgotpass', require('./forgotpassrouter'));

router.use('/defaultpass', require('./defaultpassrouter'));

router.use('/signup', require('./signuprouter'));

router.use('/todolist', require('./todolistrouter'));

router.use('/branches', require('./branchrouter'));

router.use('/finances', require('./financerouter'));

router.use('/employees', require('./employeesRouter'));

router.use('/complaints', require('./complaintsRouter'));

module.exports = router;