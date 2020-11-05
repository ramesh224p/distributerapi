var jwt=require('jsonwebtoken'),
    config=require('../../config/config.json');

module.exports.auth = function(req,res,next){
  const token = req.headers['authorization']; 
  if(typeof token !== 'undefined'){
      jwt.verify(token, config.sceretkey, function(err, decoded){
          if(!err){
            var roles = decoded.checkval[0].emp_role;
            req.role = roles;
            next();
          } else {
            res.send(err);
          }
        })
  }else {
      res.status(201).send({status:false, message: "please provide token"})
  }
}