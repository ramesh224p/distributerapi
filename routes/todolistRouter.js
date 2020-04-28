var express= require('express'),
    router= express.Router(),
    todolistController=require('../controller/todolistcontroller'),
    tdlc= new todolistController();

router.get('/', tdlc.getAll.bind(tdlc));
router.get('/:id', tdlc.getById.bind(tdlc));
router.put('/:id', tdlc.update.bind(tdlc));
router.post('/', tdlc.create.bind(tdlc));
router.delete('/:id', tdlc.remove.bind(tdlc));

module.exports=router;