var jwt=require('jsonwebtoken');

function authToken(){

}

authToken.prototype.auth = function(req,res,next){
    const bearerHeader = req.headers['authorization']; 
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    }else {
        res.status(201).send({status:false, message: "please provide token"})
    }
}

module.exports = authToken;