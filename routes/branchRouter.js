var express= require('express'),
    router= express.Router(),
    branchController= require('../controller/branchcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    bc= new branchController();

router.get('/', vt.auth, bc.getAll.bind(bc));
router.get('/:id', vt.auth, bc.getById.bind(bc));
router.post('/', vt.auth, bc.create.bind(bc));
router.put('/:id', vt.auth, bc.update.bind(bc));
router.delete('/:id', vt.auth, bc.remove.bind(bc));

module.exports=router;