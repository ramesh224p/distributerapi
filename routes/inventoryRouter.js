var express= require('express'),
    router= express.Router(),
    inventoryController= require('../controller/inventoryController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    idc= new inventoryController();

router.get('/',  authToken.auth, cache.redis, idc.getAll.bind(idc));
router.get('/:id', authToken.auth, idc.getById.bind(idc));
router.post('/', authToken.auth, idc.create.bind(idc));
router.put('/:id', authToken.auth, idc.update.bind(idc));
router.delete('/:id', authToken.auth, idc.remove.bind(idc));

module.exports=router;