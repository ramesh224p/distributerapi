var connection = require('../mysql/mysql.js');

function dashboardModel() {
    this.mysql = connection;
}

dashboardModel.prototype.getAll = function ( callback) {
    this.mysql.query('SELECT * FROM employees', function (err, result) {
        callback(err, result);
    })
}

module.exports = dashboardModel;