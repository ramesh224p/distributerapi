var express= require('express'),
    router= express.Router(),
    branchController= require('../controller/branchcontroller'),
    authToken=require('../utils/auth/authtoken'),
    authentication = require('../utils/auth/authentication'),
    cache = require('../utils/cache/cache'),
    bc= new branchController();

router.get('/', authToken.auth, authentication.member, cache.redis, bc.getAll.bind(bc));
router.get('/:id', authToken.auth, bc.getById.bind(bc));
router.post('/', authToken.auth, bc.create.bind(bc));
router.put('/:id', authToken.auth, bc.update.bind(bc));
router.delete('/:id', authToken.auth, bc.remove.bind(bc));

module.exports=router;