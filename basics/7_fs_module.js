var fs = require("fs")
fs.readFile("input.txt",function(err,data){
    if(err)
        console.log("error...");
    else   
        console.log("Async Data : "+data);
});

var data = fs.readFileSync("input.txt");
console.log("Sync Data : "+data);
console.log("This is the end...");