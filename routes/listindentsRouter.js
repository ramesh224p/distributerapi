var express= require('express'),
    router= express.Router(),
    listIndentController= require('../controller/listindentsController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cache = require('../utils/cache/cache'),
    ch = new cache(),
    lic= new listIndentController();

router.get('/', vt.auth, ch.redis, lic.getAll.bind(lic));
router.get('/:id', vt.auth, lic.getById.bind(lic));
router.post('/', vt.auth, lic.create.bind(lic));
router.put('/:id', vt.auth, lic.update.bind(lic));
router.delete('/:id', vt.auth, lic.remove.bind(lic));

module.exports=router;