var employeesModel=require('../model/employeesModel');
    

function employeesController(){
    depm= new employeesModel();
}

employeesController.prototype.getAll=function(req, res, next){
    depm.getAll( function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

employeesController.prototype.getById=function(req, res, next){
    depm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

employeesController.prototype.create=function(req, res, next){
    depm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
employeesController.prototype.update=function(req, res, next){
	console.log('hi')
    depm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}
employeesController.prototype.remove=function(req, res, next){
    depm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]})
        } else {
            res.status(200).send({status:true,data:data})
        }
    })
}

module.exports=employeesController;