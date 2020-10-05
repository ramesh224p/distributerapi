var express=require('express'),
    router= express.Router(),
    indentController=require('../controller/indentController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    icr= new indentController();

router.get('/',  verifyToken.auth, cache.redis, icr.getAll.bind(icr));
router.get('/:id', verifyToken.auth, icr.getById.bind(icr));
router.post('/', verifyToken.auth, icr.create.bind(icr));
router.put('/:id', verifyToken.auth, icr.update.bind(icr));
router.delete('/:id', verifyToken.auth, icr.remove.bind(icr));

module.exports=router;