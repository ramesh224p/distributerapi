var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginRouter'));

router.use('/dashboard', require('./dashboardRouter'));

router.use('/forgotpass', require('./forgotpassRouter'));

router.use('/inventory', require('./inventoryRouter'));

router.use('/signup', require('./signupRouter'));

router.use('/todolist', require('./todolistRouter'));

router.use('/branches', require('./branchRouter'));

router.use('/finances', require('./financeRouter'));

router.use('/indent', require('./indentRouter'));

router.use('/complaints', require('./complaintsRouter'));

module.exports = router;