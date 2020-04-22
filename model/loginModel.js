var connection = require('../mysql/mysql.js'),
    md5 = require('md5');

function loginModel() {
    this.mysql = connection;
}

loginModel.prototype.create = function (name, password, callback) {
    console.log(name, password);
    this.mysql.query('SELECT * FROM employees WHERE email= "' + name + '" AND password="' + md5(password) + '"', function (err, result) {
        callback(err, result);
		console.log(err, result);
    })
}

module.exports = loginModel;