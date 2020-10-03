var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/complaintsController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    cc= new complaintsController();

router.get('/', vt.auth, ch.redis, cc.getAll.bind(cc));
router.get('/:id', vt.auth, cc.getById.bind(cc));
router.post('/', vt.auth, cc.create.bind(cc));
router.put('/:id', vt.auth, cc.update.bind(cc));
router.delete('/:id', vt.auth, cc.remove.bind(cc));

module.exports=router;