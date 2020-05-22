module.exports.issuper=function(req, res, next){
    console.log("he is super");
    next();
}

module.exports.isadmin=function(req, res, next){
    console.log("he is admin");
    next();
}

module.exports.isemployee=function(req, res, next){
    console.log("he is employee");
    next();
}
