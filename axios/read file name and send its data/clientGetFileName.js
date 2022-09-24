var axios = require("axios");


axios.get("http://localhost:3000?fname=input.txt").then(function(res){
    console.log(res.data);
}).catch((err)=>console.log(err));