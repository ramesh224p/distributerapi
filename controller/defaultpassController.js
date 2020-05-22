var defaultpassmodel = require('../model/defaultpassmodel'),
    _controllerUtils = require('../utils/controllerUtill/controllerUtils');

function defaultpasscontroller() {
    dpm = new defaultpassmodel();
    controllerUtils = new _controllerUtils();
}

defaultpasscontroller.prototype.update = function (req, res, next) {
    controllerUtils.update(dpm, req, res, next);
}

module.exports = defaultpasscontroller;