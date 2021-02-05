var profileModel = require('../model/profileModel');

function profileController(){
    pm = new profileModel();
}

profileController.prototype.get = function(req, res, next){
    pm.get(req, res, function(err, data){
        if(err){
            console.log(err);
        }
        //     res.status(201).send({status: false, data: []})
        // } else {
        //     res.status(200).send({status: true, data: data})
        // }
    })
}

profileController.prototype.create = function(req, res, next){
    pm.create(req.body.base64image.split(',')[1], req.body.imagename, res, function(err, data){
        if(err){
            console.log(err);
        }
    })
}

// profileController.prototype.getById = function(req, res, next){
//     pm.get(req.params, function(err, data){
//         if(err){
//             res.status(201).send({status: false, data: []})
//         } else {
//             res.status(200).send({status: true, data: data})
//         }
//     })
// }

module.exports = profileController;