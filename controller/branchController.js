var branchModel=require('../model/branchmodel');
    

function branchController(){
    dbbm= new branchModel();
}

branchController.prototype.getAll=function(req, res, next){
    dbbm.getAll( function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

branchController.prototype.getById=function(req, res, next){
    dbbm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

branchController.prototype.create=function(req, res, next){
    dbbm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
branchController.prototype.update=function(req, res, next){
    dbbm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
branchController.prototype.remove=function(req, res, next){
    dbbm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

module.exports=branchController;