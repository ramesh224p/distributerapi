var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginRouter'));

router.use('/indents', require('./indentRouter'));

router.use('/branches', require('./branchRouter'));

router.use('/finances', require('./financeRouter'));

router.use('/employees', require('./employeesRouter'));

router.use('/complaints', require('./complaintsRouter'));

router.use('/inventory', require('./inventoryRouter'));

router.use('/inventory_assign', require('./inventoryAssignRouter'));

router.use('/list-indents', require('./listindentsRouter'));

router.use('/attendance', require('./attendanceRouter'));

router.use('/upload', require('./uploadRouter'));

router.use('/profile', require('./profileRouter'));

module.exports=router;