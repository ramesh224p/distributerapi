var defaultpassModel = require('../model/defaultpassmodel'),
    controllerUtil=require('../utils/controllerutils');

function defaultpassController() {
    dpmm = new defaultpassModel();
    cuu = new controllerUtil();
}

defaultpassController.prototype.update = function (req, res, next) {
    cuu.update(dpmm, req, res, next);
}

module.exports = defaultpassController;