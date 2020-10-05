var express= require('express'),
    router= express.Router(),
    financeController= require('../controller/financecontroller'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    fc= new financeController();

router.get('/', authToken.auth, cache.redis, fc.getAll.bind(fc));
router.get('/:id', authToken.auth, fc.getById.bind(fc));
router.post('/', authToken.auth, fc.create.bind(fc));
router.put('/:id', authToken.auth, fc.update.bind(fc));
router.delete('/:id', authToken.auth, fc.remove.bind(fc));

module.exports=router;