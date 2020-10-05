var express= require('express'),
    router= express.Router(),
    employeesController= require('../controller/employeesController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    ec= new employeesController();

router.get('/', authToken.auth, cache.redis, ec.getAll.bind(ec));
router.get('/:id', authToken.auth, ec.getById.bind(ec));
router.post('/', authToken.auth, ec.create.bind(ec));
router.put('/:id', authToken.auth, ec.update.bind(ec));
router.delete('/:id', authToken.auth, ec.remove.bind(ec));

module.exports=router;