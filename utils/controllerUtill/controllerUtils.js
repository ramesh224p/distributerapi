var redis = require('redis'),
    config = require('../../config/config.json'),
    logger = require('../logfile/logger').logger,
    client = redis.createClient(config.Redis_PORT);

function controllerUtills(val) {
    
}

controllerUtills.prototype.getAll=function(commanModel, req, res, callback){
    var username = req.originalUrl.split('/')[2];
    logger.info("Incoming request", { method : req.method, url : req.baseUrl});
    commanModel.getAll( req.query, function(err, data){
        logger.info("incoming request CONTROLLERUTIL", {
              err : err
            });
        if(err){
            res.status(201).send({status:false,data:[]});
        }else {
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
    var username = req.originalUrl.split('/')[2];
    commanModel.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            client.del(username);
            res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.update=function(commanModel, req, res, callback){
    var username = req.originalUrl.split('/')[2];
    commanModel.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            client.del(username);
            commanModel.getAll(req.query, function(err, data){
                if(err){
                    res.status(201).send({status:false,data:[]});
                }else {
                    client.set(username, JSON.stringify(data));
                    res.status(200).send({status:true,data:data});
                }
            })
            // res.status(200).send({status:true,data:data});
        }
    })
}

controllerUtills.prototype.remove=function(commanModel, req, res, callback){
    var username = req.originalUrl.split('/')[2];
    commanModel.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            client.del(username);
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=controllerUtills;