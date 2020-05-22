var forgotpassmodel = require('../model/forgotpassmodel'),
    _controllerUtills = require('../utils/controllerUtill/controllerUtils');

function forgotpasscontroller() {
    fpm = new forgotpassmodel();
    controllerUtills = new _controllerUtills();
}

forgotpasscontroller.prototype.getAll = function (req, res, next) {
    controllerUtills.getAll(fpm, req, res, next);
}

forgotpasscontroller.prototype.update = function (req, res, next) {
    controllerUtills.update(fpm, req, res, next);
}

module.exports = forgotpasscontroller;