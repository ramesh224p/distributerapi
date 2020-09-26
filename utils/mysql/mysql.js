var mysql=require('mysql');

const connection=mysql.createConnection({
    'host' : 'localhost',
    'user' : 'root',
    'password' : '0987',
    'database' : 'distributer'
})

connection.connect(function(err){
    if(err){
        console.log('error in database', err);
    } else{
        console.log('database is connected');
    }
})

module.exports=connection;