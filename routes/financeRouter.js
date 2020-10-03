var express= require('express'),
    router= express.Router(),
    financeController= require('../controller/financecontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    fc= new financeController();

router.get('/', vt.auth, ch.redis, fc.getAll.bind(fc));
router.get('/:id', vt.auth, fc.getById.bind(fc));
router.post('/', vt.auth, fc.create.bind(fc));
router.put('/:id', vt.auth, fc.update.bind(fc));
router.delete('/:id', vt.auth, fc.remove.bind(fc));

module.exports=router;