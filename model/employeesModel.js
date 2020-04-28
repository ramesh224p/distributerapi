var connection = require('../mysql/mysql');

function employeesModel(){
    this.mysql= connection;
}

employeesModel.prototype.getAll=function(callback){
    this.mysql.query('SELECT * FROM employees', function (err, result){
        console.log(err, result);
        callback(err, result);
    
    })
}

employeesModel.prototype.getById=function(id, callback){
    console.log(id);
    this.mysql.query('SELECT * FROM employees WHERE id='+id, function (err, result){
        callback(err, result);
    })
}

employeesModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO employees SET?', data, function (err, result){
        callback(err, {data, result});
    })
}

employeesModel.prototype.update=function(id, data, callback){
	console.log(id, data)
    this.mysql.query('UPDATE employees SET? WHERE id='+id, data, function (err, result){
        callback(err, {data, result});
    })
}
employeesModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM employees where id='+id, function (err, result){
        callback(err, result);
    })
}

module.exports=employeesModel;