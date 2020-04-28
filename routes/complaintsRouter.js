var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/branchcontroller'),
    dcpc= new complaintsController();

router.get('/', dcpc.getAll.bind(dcpc));
router.get('/:id', dcpc.getById.bind(dcpc));
router.post('/', dcpc.create.bind(dcpc));
router.put('/:id', dcpc.update.bind(dcpc));
router.delete('/:id', dcpc.remove.bind(dcpc));

module.exports=router;