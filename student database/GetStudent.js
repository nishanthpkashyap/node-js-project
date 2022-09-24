const { reject } = require("lodash");
var mysql = require("mysql");
const { resolve } = require("url");

async function  getConnect(roll,res,fun)
{
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"students"
    });

    con.connect(function(err)
    {
        try{
        if(err)
            throw err;
        }
        catch(e)
        {
            res.send("Failed to connect to DB...")
        }
    });

    console.log("Quering");
    con.query("select * from student where RollNo = "+roll,function(err,data){
       try
        {
            if(err)
                throw err;
            var d= "Name : "+data[0].Name+"<br>"+
            "RollNo : "+data[0].RollNo+"<br>"+
            "Age : "+data[0].Age+"<br>"+
            "Marks : "+data[0].Marks;
            fun(d);
        }       
        catch(e)
        {
            res.send(`Student ${roll} doesnt exists...`)
        }
    });
}


module.exports={
    getConnect:getConnect
};