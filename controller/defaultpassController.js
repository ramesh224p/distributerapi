var defaultpassmodel = require('../model/defaultpassmodel'),
    controllerUtil=require('../utils/controllerutils');

function defaultpasscontroller() {
    dpmm = new defaultpassmodel();
    cuu = new controllerUtil();
}

defaultpasscontroller.prototype.update = function (req, res, next) {
    cuu.update(dpmm, req, res, next);
}

module.exports = defaultpasscontroller;