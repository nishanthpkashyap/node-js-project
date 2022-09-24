var mysql = require("mysql");

function insertStudent(roll,name,age,marks,res)
{
    var connectionObj = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"students"
    });

    connectionObj.connect(function(err){
        try
        {
            if(err)
                throw err;
        }
        catch(e)
        {
            res.send("Failed to connect to DB...")
        }
    });


    connectionObj.query(`insert into student(RollNo,Name,Age,Marks) values (${roll},"${name}",${age},${marks})`,function(err)
    {
        try
        {
            if(err)
                throw err;
            res.send(`Student '${roll}' Inserted...`);
        }
        catch(e)
        {
                res.send(`Student '${roll}' not Inserted, maybe already exists...`);
        }      
    });       
}



module.exports={
    insertStudent:insertStudent
};