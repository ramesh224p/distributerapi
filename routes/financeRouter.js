var express= require('express'),
    router= express.Router(),
    financeController= require('../controller/financecontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    fc= new financeController();

router.get('/', verifyToken.auth, cache.redis, fc.getAll.bind(fc));
router.get('/:id', verifyToken.auth, fc.getById.bind(fc));
router.post('/', verifyToken.auth, fc.create.bind(fc));
router.put('/:id', verifyToken.auth, fc.update.bind(fc));
router.delete('/:id', verifyToken.auth, fc.remove.bind(fc));

module.exports=router;