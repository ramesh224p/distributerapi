var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/complaintsController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    cc= new complaintsController();

router.get('/', vt.auth, cc.getAll.bind(cc));
router.get('/:id', vt.auth, cc.getById.bind(cc));
router.post('/', vt.auth, cc.create.bind(cc));
router.put('/:id', vt.auth, cc.update.bind(cc));
router.delete('/:id', vt.auth, cc.remove.bind(cc));

module.exports=router;