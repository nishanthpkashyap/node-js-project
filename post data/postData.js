var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.text());
app.use(express.urlencoded());

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/form.html");
});
app.get("/home",function(req,res)
{
    res.sendFile(__dirname+"/form.html");
});

app.post("/postData",function(req,res)
{
    var name = req.body.name;
    res.send(name);
});

app.listen(8000,()=>console.log("Server started at 8000"));