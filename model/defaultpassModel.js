var connection = require('../mysql/mysql');

function defaultpassModel() {
    this.mysql = connection;
}

defaultpassModel.prototype.update = function (id, data, callback) {
    this.mysql.query('update employees set? where id=' + id, data, function (err, result) {
        console.log("dne");
        callback(err, result);
    })
}

module.exports = defaultpassModel;