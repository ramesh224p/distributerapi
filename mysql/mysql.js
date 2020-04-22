var mysql=require('mysql');

const connection=mysql.createConnection({
    'host' : 'localhost',
    'user' : 'root',
    'password' : 'Lasya@123',
    'database' : 'distributer'
})

connection.connect(function(err){
    if(err){
        console.log('error in database');
    } else{
        console.log('database is connected');
    }
})

module.exports=connection;