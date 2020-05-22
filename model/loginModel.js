var connection = require('../utils/mysql/mysql'),
    md5 = require('md5');

function model() {
    this.mysql = connection;
}

model.prototype.create = function (name, password, callback) {
    this.mysql.query('SELECT * FROM employees WHERE emp_email= "' + name + '" AND password="' + md5(password) + '"', function (err, result) {
        callback(err, result);	
    })
}

module.exports = model;