var express= require('express'),
    router= express.Router(),
    listIndentController= require('../controller/listindentsController'),
    verifyToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    lic= new listIndentController();

router.get('/', verifyToken.auth, cache.redis, lic.getAll.bind(lic));
router.get('/:id', verifyToken.auth, lic.getById.bind(lic));
router.post('/', verifyToken.auth, lic.create.bind(lic));
router.put('/:id', verifyToken.auth, lic.update.bind(lic));
router.delete('/:id', verifyToken.auth, lic.remove.bind(lic));

module.exports=router;