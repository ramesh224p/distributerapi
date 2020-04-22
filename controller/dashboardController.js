var dashboardModel = require('../model/dashboardmodel'),
    controllerUtil=require('../utils/controllerutils'),
    jwt=require('jsonwebtoken');

function dashboardController() {
    dm = new dashboardModel();
    cuu=new controllerUtil();
}

dashboardController.prototype.getAll = function (req, res, next) {
    // jwt.verify(req.headers.authorization, 'some' , (err, authData) => {
    //     if(err){
    //         console.log(err)
    //     }else{
            cuu.getAll(dm, req, res, next);
    //     }
    // })
}

module.exports = dashboardController;