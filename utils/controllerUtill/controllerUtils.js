var url = require('url'),
    redis = require('redis'),
    config = require('../../config/config.json'),
    client = redis.createClient(config.Redis_PORT);

function controllerUtills(val) {
    
}

controllerUtills.prototype.getAll=function(commanModel, req, res, callback){
    var r = req.originalUrl;
    var usern = r.split('/');
    var username = usern[2];
    console.log("hhh", req.query);
        console.log("hii", usern[2]);
    commanModel.getAll( req.params, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            client.set(username, JSON.stringify(data));
            res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.getById=function(commanModel, req, res, callback){
    commanModel.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.create=function(commanModel, req, res, callback){
    commanModel.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.update=function(commanModel, req, res, callback){
    commanModel.update(req.params.id, req.body, function(err, data){
        console.log(err, data);
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.remove=function(commanModel, req, res, callback){
    commanModel.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=controllerUtills;