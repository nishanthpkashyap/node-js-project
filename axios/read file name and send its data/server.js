const bodyParser = require("body-parser");
var express = require("express");
var app = express();
var fs = require("fs");

app.use(bodyParser.json());
app.use(express.urlencoded());

app.get("/",function(req,res){
    var fname = req.query.fname;
    console.log(fname+"\n"+typeof(fname));
    var read = fs.createReadStream(__dirname+"/"+fname);
    read.pipe(res);
});


app.post("/data",function(req,res){
    var fname = req.body.fname;
    var read = fs.createReadStream(__dirname+"/"+fname);
    read.pipe(res);
});

app.listen(3000,()=>{console.log("Server started at localhost 3000...")});