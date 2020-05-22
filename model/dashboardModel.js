var connection = require('../utils/mysql/mysql');

function dashboardmodel() {
    this.mysql = connection;
}

dashboardmodel.prototype.getAll = function (params, callback) {
    this.mysql.query('SELECT * FROM emp', function (err, result) {
        callback(err, result);
    })
}

module.exports = dashboardmodel;