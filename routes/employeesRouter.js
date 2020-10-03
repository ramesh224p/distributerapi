var express= require('express'),
    router= express.Router(),
    employeesController= require('../controller/employeesController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    ec= new employeesController();

router.get('/', vt.auth, ch.redis, ec.getAll.bind(ec));
router.get('/:id', vt.auth, ec.getById.bind(ec));
router.post('/', vt.auth, ec.create.bind(ec));
router.put('/:id', vt.auth, ec.update.bind(ec));
router.delete('/:id', vt.auth, ec.remove.bind(ec));

module.exports=router;