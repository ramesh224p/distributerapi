var forgotpassModel = require('../model/forgotpassmodel'),
    controllerUtil=require('../utils/controllerutils');

function forgotpassController() {
    fpm = new forgotpassModel();
    cuu = new controllerUtil();
}

forgotpassController.prototype.getAll = function (req, res, next) {
    cuu.getAll(fpm, req, res, next);
}

forgotpassController.prototype.update = function (req, res, next) {
    cuu.update(fpm, req, res, next);
}

module.exports = forgotpassController;