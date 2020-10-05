var express= require('express'),
    router= express.Router(),
    listIndentController= require('../controller/listindentsController'),
    authToken=require('../utils/auth/authtoken'),
    cache = require('../utils/cache/cache'),
    lic= new listIndentController();

router.get('/', authToken.auth, cache.redis, lic.getAll.bind(lic));
router.get('/:id', authToken.auth, lic.getById.bind(lic));
router.post('/', authToken.auth, lic.create.bind(lic));
router.put('/:id', authToken.auth, lic.update.bind(lic));
router.delete('/:id', authToken.auth, lic.remove.bind(lic));

module.exports=router;