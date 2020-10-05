var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/complaintsController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    cc= new complaintsController();

router.get('/', authToken.auth, cache.redis, cc.getAll.bind(cc));
router.get('/:id', authToken.auth, cc.getById.bind(cc));
router.post('/', authToken.auth, cc.create.bind(cc));
router.put('/:id', authToken.auth, cc.update.bind(cc));
router.delete('/:id', authToken.auth, cc.remove.bind(cc));

module.exports=router;