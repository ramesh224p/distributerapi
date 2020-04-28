var connection = require('../mysql/mysql.js'),
    md5 = require('md5');

function model() {
    this.mysql = connection;
}

model.prototype.create = function (name, password, callback) {
    console.log(name, password);
    this.mysql.query('SELECT * FROM employees WHERE emp_email= "' + name + '" AND password="' + md5(password) + '"', function (err, result) {
		console.log(err, result);
        callback(err, result);
		
    })
}

module.exports = model;