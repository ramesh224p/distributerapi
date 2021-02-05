var uploadModel = require('../model/uploadModel');
    

function uploadController(){
    um = new uploadModel();
}

uploadController.prototype.create = function(req, res, next){
    um.create(req.body.base64image.split(',')[1], req.body.imagename, res, function(err, data){
        if(err){
            console.log(err);
            throw err;
        }
    })
}

module.exports = uploadController;