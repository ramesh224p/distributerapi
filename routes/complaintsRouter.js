var express= require('express'),
    router= express.Router(),
    complaintsController= require('../controller/complaintsController'),
    dcc= new complaintsController();

router.get('/', dcc.getAll.bind(dcc));
router.get('/:id', dcc.getById.bind(dcc));
router.post('/', dcc.create.bind(dcc));
router.put('/:id', dcc.update.bind(dcc));
router.delete('/:id', dcc.remove.bind(dcc));

module.exports=router;