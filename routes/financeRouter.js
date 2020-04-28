var express= require('express'),
    router= express.Router(),
    financeController= require('../controller/branchcontroller'),
    dffc= new financeController();

router.get('/', dffc.getAll.bind(dffc));
router.get('/:id', dffc.getById.bind(dffc));
router.post('/', dffc.create.bind(dffc));
router.put('/:id', dffc.update.bind(dffc));
router.delete('/:id', dffc.remove.bind(dffc));

module.exports=router;