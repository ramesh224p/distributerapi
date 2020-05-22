var connection = require('../utils/mysql/mysql'),
  nodemailer = require('nodemailer'),
  // usermodel = require('../model/usersmodel'),
  md5 = require('md5');
  // um = new usermodel();

function forgotpassmodel() {
  this.mysql = connection;
}

forgotpassmodel.prototype.getAll = function (data, callback) {
  this.mysql.query('select * from emp where email="' + data + '"', function (err, result) {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'patilpatil577@gmail.com',
        pass: 'ramesh@143sdf'
      }
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'p.ramesh224@gmail.com',
      subject: 'Reset password',
      text: 'ur password is changed to random pass'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        callback({ message: "something Went Wrong" }, result);
      } else {
        um.update(result[0].id, { "password": "123456" }, function (_err, _res) {
          callback(_err, _res);
        })
      }
    })
  })
}

forgotpassmodel.prototype.update = function (id, data, callback) {
  this.mysql.query('UPDATE emp SET? WHERE id=' + id, data, function (err, result) {
    callback(err, result);
  })
}

module.exports = forgotpassmodel;