var forgotpassmodel = require('../model/forgotpassmodel'),
    controllerUtil=require('../utils/controllerutils');

function forgotpasscontroller() {
    fpm = new forgotpassmodel();
    cuu = new controllerUtil();
}

forgotpasscontroller.prototype.getAll = function (req, res, next) {
    cuu.getAll(fpm, req, res, next);
}

forgotpasscontroller.prototype.update = function (req, res, next) {
    cuu.update(fpm, req, res, next);
}

module.exports = forgotpasscontroller;