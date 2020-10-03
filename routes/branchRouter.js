var express= require('express'),
    router= express.Router(),
    branchController= require('../controller/branchcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    bc= new branchController();

router.get('/', vt.auth, ch.redis, bc.getAll.bind(bc));
router.get('/:id', vt.auth, bc.getById.bind(bc));
router.post('/', vt.auth, bc.create.bind(bc));
router.put('/:id', vt.auth, bc.update.bind(bc));
router.delete('/:id', vt.auth, bc.remove.bind(bc));

module.exports=router;