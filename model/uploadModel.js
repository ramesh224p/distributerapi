var connection = require('../utils/mysql/mysql'),
    fs = require('fs'),
    path = require('path'),
    Buffer = require('buffer').Buffer,
    base64ToImage = require('base64-to-image');

function uploadModel() {
    this.mysql = connection;
}

uploadModel.prototype.create = function (data, name, res, callback) {
    var path = './up/';
    var filename = name;
    var buf = Buffer.from(data, 'base64');
    const base64ToImage = (buf, path, filename) => {       
        fs.writeFile(path + filename, buf, 'binary', function (err, result) {
            if (err) {
                res.send({ status: false, err: err });
            } else {
                res.json({ status: true, msg: "image uploaded" });
                callback(err, result);
            }
        });
    }
    base64ToImage(buf, path, filename);
}

module.exports = uploadModel;