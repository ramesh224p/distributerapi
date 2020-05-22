var connection = require('../utils/mysql/mysql');

function defaultpassmodel() {
    this.mysql = connection;
}

defaultpassmodel.prototype.update = function (id, data, callback) {
    this.mysql.query('UPDATE emp SET? WHERE id=' + id, data, function (err, result) {
        callback(err, result);
    })
}

module.exports = defaultpassmodel;