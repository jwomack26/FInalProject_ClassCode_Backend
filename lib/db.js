//Code from professor Masood's tutorial
//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('abcd2');
//db.serialize(function(){
    //db.run("CREATE TABLE user (id INT, dt TEXT");

    //var stmt = db.prepare("INSERT into user values(?,?)");
    //for(var i=0;i<10;i++){
        //var d=new Date();
        //var n= d.toLocaleTimeString();
    //}
    //stmt.finalize();

//db.each("SELECT id,dt from user", function(err,row)
//{
    //console.log("User id:"+row.id, row.dt);
//});
//});
//db.close();


const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
//const sequelize = new Sequelize('mysql://root:password@localhost/cohort11a-capstone-api', {logging: false});

//Make sure you run this: npm install sqlite3 --save
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Volumes/TimeMachine/FilesForBootcamp/FInalProject_ClassCode_Backend/capstoneproject.db'
});


module.exports = {sequelize};
