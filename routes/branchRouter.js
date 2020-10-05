var express= require('express'),
    router= express.Router(),
    branchController= require('../controller/branchcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    whois = require('../utils/auth/authentication'),
    cache = require('../utils/cache/cache'),
    bc= new branchController();

router.get('/', verifyToken.auth, whois.issuper, cache.redis, bc.getAll.bind(bc));
router.get('/:id', verifyToken.auth, bc.getById.bind(bc));
router.post('/', verifyToken.auth, bc.create.bind(bc));
router.put('/:id', verifyToken.auth, bc.update.bind(bc));
router.delete('/:id', verifyToken.auth, bc.remove.bind(bc));

module.exports=router;