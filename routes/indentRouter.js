var express=require('express'),
    router= express.Router(),
    indentController=require('../controller/indentController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    icr= new indentController();

router.get('/',  authToken.auth, cache.redis, icr.getAll.bind(icr));
router.get('/:id', authToken.auth, icr.getById.bind(icr));
router.post('/', authToken.auth, icr.create.bind(icr));
router.put('/:id', authToken.auth, icr.update.bind(icr));
router.delete('/:id', authToken.auth, icr.remove.bind(icr));

module.exports=router;