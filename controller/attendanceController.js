var attendanceModel = require('../model/attendanceModel');
    

function attendanceController () {
    am = new attendanceModel();
}



attendanceController.prototype.create = function (req, res, next) {
    if(req.body.email && req.body.password){
        am.create(req.body.email, req.body.password, function (err, data) {
            if (err) {
                res.status(201).send({ status: false, data: [] });
            } else if (data.length == 0) {
                res.status(401).send({ status: false, data: [], message: "your not registereed" });
            } else {
                res.status(200).send({ status: true, data : data});
            }
        })
    } else {
        am.create1(req.body, function (err, data) {
            if (err) {
                res.status(201).send({ status: false, data: [] });
            } 
            if (data.length == 0) {
                res.status(401).send({ status: false, data: [], message: "your not registereed" });
            } else {
                res.status(200).send({ status: true, data : data});
            }
        })
    }
}

attendanceController.prototype.update = function (req, res, next) {
    console.log("id", req.params.id)
    console.log("body", req.body.break.split(' ')[1])
    am.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(201).send({ status: false, data: [] });
        } else {
            res.status(200).send({ status: true, data : data});
        }
    })
}


module.exports = attendanceController;