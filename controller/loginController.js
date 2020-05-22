var loginModel = require('../model/loginmodel.js'),
    config= require('../config/config.json'),
    jwt = require('jsonwebtoken');

function loginController() {
    lm = new loginModel();
}

loginController.prototype.create = function (req, res) {
    lm.create(req.body.email, req.body.password, function (err, data) {
        if (err) {
            res.status(201).send({ status: false, data: [] });
        } if (data.length == 0) {
            res.status(401).send({ status: false, data: [], message: "your not registereed" });
        } else {
            var token = jwt.sign({ checkval: data }, config.sceretkey, {
                expiresIn: 86400
            });
            res.status(200).send({ status: true, val: { data1: data[0], token: token } });
        }
    })
}

module.exports = loginController;