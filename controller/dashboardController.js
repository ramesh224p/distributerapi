var dashboardmodel = require('../model/dashboardmodel'),
    _controllerUtils = require('../utils/controllerUtill/controllerUtils');

function dashboardcontroller() {
    dm = new dashboardmodel();
    controllerUtils = new _controllerUtils();
}

dashboardcontroller.prototype.getAll = function (req, res, next) {
    controllerUtils.getAll(dm, req, res, next);
}

module.exports = dashboardcontroller;