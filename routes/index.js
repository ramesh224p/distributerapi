var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginRouter'));

router.use('/indents', require('./indentRouter'));

router.use('/forgotpass', require('./forgotpassRouter'));

router.use('/todolist', require('./todolistRouter'));

router.use('/branches', require('./branchRouter'));

router.use('/finances', require('./financeRouter'));

router.use('/employees', require('./employeesRouter'));

router.use('/complaints', require('./complaintsRouter'));

router.use('/inventory', require('./inventoryRouter'));

router.use('/inventory_assign', require('./inventoryAssignRouter'));

router.use('/list-indents', require('./listindentsRouter'));

module.exports=router;