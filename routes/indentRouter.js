var express=require('express'),
    router= express.Router(),
    indentController=require('../controller/indentController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    icr= new indentController();

router.get('/',  vt.auth, icr.getAll.bind(icr));
router.get('/', vt.auth, icr.getById.bind(icr));
router.post('/', vt.auth, icr.create.bind(icr));
router.put('/', vt.auth, icr.update.bind(icr));
router.delete('/', vt.auth, icr.remove.bind(icr));

module.exports=router;