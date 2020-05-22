var connection = require('../utils/mysql/mysql');
	
function signupModel(){
	this.mysql=connection;
}

signupModel.prototype.create=function(body, callback){
	this.mysql.query('INSERT INTO emp SET?',body, function(err, result) {
		callback(err, result);
	})
};

module.exports=signupModel;