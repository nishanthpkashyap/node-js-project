const { forEach } = require("lodash");
var mysql = require("mysql");

function fetchAll(res)
{
    var sqlConnectionObj = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"students" 
    });

    sqlConnectionObj.connect(function(err){
        try
        {
            if(err)
                throw err;
        }
        catch(e)
        {
            console.log("Attempt to Connect with DB failed...")
        }
    });


    sqlConnectionObj.query("select * from student",function(err,data){
        try
        {
            if(err)
                throw err
            da=""
            var i=1;
            forEach(data,function(d){
                da+= `<h3 style="text-decoration:solid underline black">Student ${i++}</h3>RollNo : ${d.RollNo}<br>Name : ${d.Name}<br>Age : ${d.Age}<br>Marks : ${d.Marks}<br>`
            });
            res.send(da)
        }
        catch(e)
        {
            res.send("Something went wrong while fetching data, try again later...")
        }
    });
}

module.exports={
    fetchAll:fetchAll
};