var complaintsModel=require('../model/branchmodel');
    

function complaintsController(){
    dcpm= new complaintsModel();
}

complaintsController.prototype.getAll=function(req, res, next){
    dcpm.getAll( function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

complaintsController.prototype.getById=function(req, res, next){
    dcpm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

complaintsController.prototype.create=function(req, res, next){
    dcpm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
complaintsController.prototype.update=function(req, res, next){
    dcpm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
complaintsController.prototype.remove=function(req, res, next){
    dcpm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

module.exports=complaintsController;