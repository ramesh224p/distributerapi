var express= require('express'),
    router= express.Router(),
    employeesController= require('../controller/employeesController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    ec= new employeesController();

router.get('/', verifyToken.auth, cache.redis, ec.getAll.bind(ec));
router.get('/:id', verifyToken.auth, ec.getById.bind(ec));
router.post('/', verifyToken.auth, ec.create.bind(ec));
router.put('/:id', verifyToken.auth, ec.update.bind(ec));
router.delete('/:id', verifyToken.auth, ec.remove.bind(ec));

module.exports=router;