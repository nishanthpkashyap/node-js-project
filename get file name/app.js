var express = require('express');
var upload = require("express-fileupload");
var fs = require("fs");
//var bodyParser = require("body-parser");
var app = express();

app.use(upload());
app.use(express.urlencoded());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/filename.html");
});


app.get("/home",function(req,res){
    res.sendFile(__dirname+"/filename.html");
});

app.get("/write",function(req,res){
    var file = req.query.fname;
    file=__dirname+"\\"+file;
    var read = fs.createReadStream(file);
    read.pipe(res);
});

app.post("/write",function(req,res){
    console.log(req.body);
    var file = req.body.fname;
    var read = fs.createReadStream(__dirname+"\\"+file)
    read.pipe(res);
});
app.listen(8000,()=>console.log("Server started at localhost 8000"));