var express= require('express'),
    router= express.Router(),
    inventoryController= require('../controller/inventoryController'),
    dic= new inventoryController();

router.get('/', dic.getAll.bind(dic));
router.get('/:id', dic.getById.bind(dic));
router.post('/', dic.create.bind(dic));
router.put('/:id', dic.update.bind(dic));
router.delete('/:id', dic.remove.bind(dic));

module.exports=router;