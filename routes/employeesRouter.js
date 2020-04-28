var express= require('express'),
    router= express.Router(),
    employeesController= require('../controller/employeesController'),
    desc= new employeesController();

router.get('/', desc.getAll.bind(desc));
router.get('/:id', desc.getById.bind(desc));
router.post('/', desc.create.bind(desc));
router.put('/:id', desc.update.bind(desc));
router.delete('/:id', desc.remove.bind(desc));

module.exports=router;