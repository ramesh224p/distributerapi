const cache = require('../utils/cache/cache');

var express= require('express'),
    router= express.Router(),
    inventoryController= require('../controller/inventoryController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    ch = new cache(),
    idc= new inventoryController();

router.get('/',  vt.auth, ch.redis, idc.getAll.bind(idc));
router.get('/:id', vt.auth, idc.getById.bind(idc));
router.post('/', vt.auth, idc.create.bind(idc));
router.put('/:id', vt.auth, idc.update.bind(idc));
router.delete('/:id', vt.auth, idc.remove.bind(idc));

module.exports=router;