var connection = require('../mysql/mysql');

function defaultpassmodel() {
    this.mysql = connection;
}

defaultpassmodel.prototype.update = function (id, data, callback) {
    this.mysql.query('update emp set? where id=' + id, data, function (err, result) {
        console.log("dne");
        callback(err, result);
    })
}

module.exports = defaultpassmodel;