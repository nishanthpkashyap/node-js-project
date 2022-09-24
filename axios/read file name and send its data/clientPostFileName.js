var axios = require("axios");
/*var readline = require("readline");

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var fname;
rl.question("Enter the file name :\n",function(answer){
    fname=answer;
    console.log(fname);
    rl.close();
});*/

axios.post("http://localhost:3000/data",{"fname":"input.txt"}).then(function(res){
    console.log(res.data);
}).catch((err)=>console.log(err));


