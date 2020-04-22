var express= require('express'),
    router= express.Router(),
    branchController= require('../controller/branchController'),
    dbbc= new branchController();

router.get('/', dbbc.getAll.bind(dbbc));
router.get('/:id', dbbc.getById.bind(dbbc));
router.post('/', dbbc.create.bind(dbbc));
router.put('/:id', dbbc.update.bind(dbbc));
router.delete('/:id', dbbc.remove.bind(dbbc));

module.exports=router;