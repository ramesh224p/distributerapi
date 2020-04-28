var dashboardmodel = require('../model/dashboardmodel'),
    controllerUtil=require('../utils/controllerutils'),
    jwt=require('jsonwebtoken');

function dashboardcontroller() {
    dm = new dashboardmodel();
    cuu=new controllerUtil();
}

dashboardcontroller.prototype.getAll = function (req, res, next) {
    // jwt.verify(req.headers.authorization, 'some' , (err, authData) => {
    //     if(err){
    //         console.log(err)
    //     }else{
            cuu.getAll(dm, req, res, next);
    //     }
    // })
}

module.exports = dashboardcontroller;