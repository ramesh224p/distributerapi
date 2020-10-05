var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/complaintsController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    cc= new complaintsController();

router.get('/', verifyToken.auth, cache.redis, cc.getAll.bind(cc));
router.get('/:id', verifyToken.auth, cc.getById.bind(cc));
router.post('/', verifyToken.auth, cc.create.bind(cc));
router.put('/:id', verifyToken.auth, cc.update.bind(cc));
router.delete('/:id', verifyToken.auth, cc.remove.bind(cc));

module.exports=router;