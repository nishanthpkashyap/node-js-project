var express=require("express");
var bodyParser = require("body-parser");
var sqlConnection = require("./GetStudent");
var fetchAllStudents = require("./AllStudents"); 
var app=express();
var insertStudent = require("./InsertStudent");
const { response } = require("express");

app.use(bodyParser.text());
app.use(express.urlencoded());

app.get("/getform",function(req,res){
    res.sendFile(__dirname+"/getform.html");
});

app.post("/getstudent",async function(req,res){
    var roll = req.body.rollno;
    sqlConnection.getConnect(roll,res,function(d){
        res.send(d);
    }); 
});

app.get("/insertform", function(req,res){
    res.sendFile(__dirname+"/insertform.html");
});

app.post("/insertstudent", function(req,res){
    var name = req.body.name;
    var roll = req.body.roll;
    var age = req.body.age;
    var marks = req.body.marks;
    insertStudent.insertStudent(roll,name,age,marks,res);
});

app.get("/allstudentsform",function(req,res){
    res.sendFile(__dirname+"/allStudentsForm.html");
});

app.post("/allstudents",function(req,res){
    fetchAllStudents.fetchAll(res);
});

app.listen(7000,()=>console.log("Server started in localhost at port at 7000...."));
