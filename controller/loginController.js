var model = require('../model/loginmodel.js'),
    jwt = require('jsonwebtoken');

function controller() {
    ddm = new model();
}

controller.prototype.create = function (req, res) {
    console.log(req.body);
	console.log(req.body.emp_email);
    ddm.create(req.body.emp_email, req.body.password, function (err, data) {
        if (err) {
            res.status(201).send({ status: false, data: [] });
        } if (data.length == 0) {
            res.status(201).send({ status: false, data: [], message: "your not registereed" });
        } else {
            var token = jwt.sign({ checkval: data }, "some", {
                expiresIn: 86400 // expires in 24 hours
            });
            console.log('#########', token);
            res.status(200).send({ status: true, val: { data1: data, token: token } });
        }
    })
}

module.exports = controller;