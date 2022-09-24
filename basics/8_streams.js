var fs = require("fs");
var readStream = fs.createReadStream('input.txt');

var data="";

readStream.on("data",function(chunk)
{
    data+=chunk;
});

readStream.on("end",function()
{
    console.log(data);
});

var d = "Hello Y'all";
var writeStream =  fs.createWriteStream("output.txt");
writeStream.write(d);
writeStream.end();
writeStream.on("finish",function()
{
    console.log("Write Completed");
});