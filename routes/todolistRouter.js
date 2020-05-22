var express= require('express'),
    router= express.Router(),
    todolistController=require('../controller/todolistcontroller'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    tdlc= new todolistController();

router.get('/', vt.auth, tdlc.getAll.bind(tdlc));
router.get('/:id', vt.auth, tdlc.getById.bind(tdlc));
router.put('/:id', vt.auth, tdlc.update.bind(tdlc));
router.post('/', vt.auth, tdlc.create.bind(tdlc));
router.delete('/:id', vt.auth, tdlc.remove.bind(tdlc));

module.exports=router;