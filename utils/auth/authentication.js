module.exports.issuper=function(req, res, next){
    if(req.role == 1)
    console.log("he is super-admin");
    else if (req.role == 2)
    console.log("he is admin");
    else if(req.role == 3)
    console.log("he is employee");
    else 
    console.log("not provided the role")
    next();
}
