var express= require('express'),
    router= express.Router(),
    inventoryAssignController= require('../controller/inventoryAssignController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    iadc= new inventoryAssignController();

router.get('/', verifyToken.auth, cache.redis, iadc.getAll.bind(iadc));
router.get('/:id', verifyToken.auth, iadc.getById.bind(iadc));
router.post('/',  verifyToken.auth, iadc.create.bind(iadc));
router.put('/:id', verifyToken.auth, iadc.update.bind(iadc));
router.delete('/:id', verifyToken.auth, iadc.remove.bind(iadc));

module.exports=router;