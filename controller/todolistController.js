var todolistModel= require('../model/todolistmodel');

function todolistController(){
    tdlm=new todolistModel();
}

todolistController.prototype.getAll=function(req, res, next){
    tdlm.getAll(req, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

todolistController.prototype.getById=function(req, res, next){
    tdlm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

todolistController.prototype.create=function(req, res, next){
    tdlm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

todolistController.prototype.update=function(req, res, next){
    tdlm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

todolistController.prototype.remove=function(req, res, next){
    tdlm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=todolistController;