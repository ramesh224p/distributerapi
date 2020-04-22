var connection=require('../mysql/mysql');
	
function signupModel(){
	this.mysql=connection;
}

signupModel.prototype.create=function(body, callback){
	this.mysql.query('INSERT INTO employees SET?',body, function(err, result) {
		callback(err, result);
		console.log(err, result);
	})
};

module.exports=signupModel;