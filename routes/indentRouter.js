var express= require('express'),
    router= express.Router(),
    indentController= require('../controller/indentController'),
    ditc= new indentController();

router.get('/', ditc.getAll.bind(ditc));
router.get('/:id', ditc.getById.bind(ditc));
router.post('/', ditc.create.bind(ditc));
router.put('/:id', ditc.update.bind(ditc));
router.delete('/:id', ditc.remove.bind(ditc));

module.exports=router;