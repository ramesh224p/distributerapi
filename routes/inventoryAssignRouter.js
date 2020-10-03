var express= require('express'),
    router= express.Router(),
    inventoryAssignController= require('../controller/inventoryAssignController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    iadc= new inventoryAssignController();

router.get('/', vt.auth, ch.redis, iadc.getAll.bind(iadc));
router.get('/:id', vt.auth, iadc.getById.bind(iadc));
router.post('/',  vt.auth, iadc.create.bind(iadc));
router.put('/:id', vt.auth, iadc.update.bind(iadc));
router.delete('/:id', vt.auth, iadc.remove.bind(iadc));

module.exports=router;