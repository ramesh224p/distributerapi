var express= require('express'),
    router= express.Router(),
    inventoryController= require('../controller/inventoryController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    idc= new inventoryController();

router.get('/',  verifyToken.auth, cache.redis, idc.getAll.bind(idc));
router.get('/:id', verifyToken.auth, idc.getById.bind(idc));
router.post('/', verifyToken.auth, idc.create.bind(idc));
router.put('/:id', verifyToken.auth, idc.update.bind(idc));
router.delete('/:id', verifyToken.auth, idc.remove.bind(idc));

module.exports=router;