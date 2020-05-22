var express= require('express'),
    router= express.Router(),
    employeesController= require('../controller/employeesController'),
    verifyToken=require('../utils/auth/authtoken'),
    vt = new verifyToken(),
    ec= new employeesController();

router.get('/', vt.auth, ec.getAll.bind(ec));
router.get('/:id', vt.auth, ec.getById.bind(ec));
router.post('/', vt.auth, ec.create.bind(ec));
router.put('/:id', vt.auth, ec.update.bind(ec));
router.delete('/:id', vt.auth, ec.remove.bind(ec));

module.exports=router;