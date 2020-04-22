var financeModel=require('../model/financemodel'),
    controllerUtil=require('../utils/controllerutils');
    

function financeController() {
    dffm= new financeModel();
    dccu= new controllerUtil();
}

financeController.prototype.getAll=function(req, res, next){
    console.log('financecontrol')
    dccu.getAll(dffm, req, res, next);
    // dffm.getAll(function(err, data){
    //     if(err){
    //         res.status(201).send({status:false,data:[]})
    //     } else {
    //         res.status(200).send({status:true,data:data})
    //     }
    // })
}

financeController.prototype.getById=function(req, res, next){
    dffm.getById(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

financeController.prototype.create=function(req, res, next){
    dffm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
financeController.prototype.update=function(req, res, next){
    dffm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
financeController.prototype.remove=function(req, res, next){
    dffm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

module.exports=financeController;