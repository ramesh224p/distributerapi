var express= require('express'),
    router= express.Router(),
    inventoryAssignController= require('../controller/inventoryAssignController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    iadc= new inventoryAssignController();

router.get('/', authToken.auth, cache.redis, iadc.getAll.bind(iadc));
router.get('/:id', authToken.auth, iadc.getById.bind(iadc));
router.post('/',  authToken.auth, iadc.create.bind(iadc));
router.put('/:id', authToken.auth, iadc.update.bind(iadc));
router.delete('/:id', authToken.auth, iadc.remove.bind(iadc));

module.exports=router;