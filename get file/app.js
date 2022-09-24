
var express = require("express");
var upload  = require("express-fileupload");
var readStream = require("fs");
var app = express();
var bodyParser = require("body-parser");



app.use(upload());

app.get("/" ,function(req,res){
    res.sendFile(__dirname+"/filehtml.html")
});

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/filehtml.html")
});

app.post("/write",function(req,res){
    if(req.files)
    {
        var file = req.files.file;
        var d = file.data.toString();
        /*var arr =d.split();*/
        console.log(d);

        res.write(d);
        res.end();
    }
});

app.listen(3001,()=>console.log("Server running on localhost at port 3001"));

