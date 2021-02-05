var connection = require('../utils/mysql/mysql'),
fs = require('fs'),
path = require('path'),
Buffer = require('buffer').Buffer,
imageToBase64 = require('image-to-base64');

function profileModel(){
    this.mysql = connection;
}

profileModel.prototype.get = function(req, res, callback) {
    path = "./profile/avatar.jpg";
    if ( fs.existsSync(path)) {
        imageToBase64("./profile/avatar.jpg") 
        .then(
            (response) => {
                res.status(200).send({status: true, data: response})
            }
        )
        .catch(
            (error) => {
                console.log(error); 
            }
        )
    } else {
        return null;
    }
    
}

profileModel.prototype.create = function (data, name, res, callback) {
    var path = './profile/';
    var filename = "avatar.jpg";
    var buf = Buffer.from(data, 'base64');
    console.log("1636*1636");

    const base64ToImage = (buf, path, filename) => {       
        fs.writeFile(path + filename, buf, 'binary', function (err, result) {
            if (err) {
                res.send({ status: false, err: err });
            } else {
                console.log(result);
                res.send({ status: true, base64: data, msg: "profile image uploaded" });
                callback(err, data);
            }
        });
    }
    base64ToImage(buf, path, filename);
}

module.exports = profileModel;