var connection = require ('../utils/mysql/mysql'),
    moment = require('moment'),
    date = require('date-and-time'),
    md5 = require('md5');

function attendanceModel() {
    this.mysql = connection;
}

attendanceModel.prototype.create = function (email, password, callback){
    this.mysql.query('SELECT * FROM employees where emp_email= "' + email +'" AND password="'+ md5(password) +'"', function (err, result){
        callback(err, result);
    })
}

attendanceModel.prototype.create1 = function (data, callback){
    this.mysql.query('INSERT INTO attendance SET? ',data, function (err, result){
        callback(err, {data, result});
    })
}

attendanceModel.prototype.update = function (id, item, callback){
    // var now = date.parse(item.break);
    // console.log(item, id)
    // console.log(now)
    // console.log(date.format(now.break.split(' ')[1], 'hh:mm:ss A '))
    this.mysql.query("UPDATE attendance SET? where id="+id, item, function (err, result){
        callback(err, result);
    })
}

module.exports = attendanceModel;