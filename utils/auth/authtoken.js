var jwt=require('jsonwebtoken'),
    config=require('../../config/config.json');

function authToken(){

}

authToken.prototype.auth = function(req,res,next){
    const token = req.headers['authorization']; 
    if(typeof token !== 'undefined'){
        jwt.verify(token, config.sceretkey, function(err, decoded){
            if(!err){
              next()
            } else {
              res.send(err);
            }
          })
    }else {
        res.status(201).send({status:false, message: "please provide token"})
    }
}

module.exports = authToken;