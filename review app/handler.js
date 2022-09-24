var queryString = require("querystring");

function home(response,data)
{
    console.log("Executing Home Handler");
    var htmlfile = "<!DOCTYPE html>"+
    '<html lang="en">'+
    "<head>"+
        '<meta charset="UTF-8">'+
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        "<title>Review</title>"+
    "</head>"+
    "<body>"+
        '<form method="post" action="/review">'+
                "<label>Review :</label>"+
                "<br>"+
                "<br>"+
                '<textarea rows="20" cols="60" name="text" placeholder="Enter text" required></textarea>'+
                "<br>"+
                "<br>"+
                '<input type="submit" value="Submit">'+
        "</form>"+
    "</body>"+
    "</html>";
    //response.writeHead(200,{"Content-Type":"text/html"});
    response.write(htmlfile);
    response.end();
}

function review(response,data)
{
    console.log("Executing Review Handler")
    response.write("The Review submitted by you is :\n\n"+queryString.parse(data).text);
    response.end();
}

module.exports = {
    home:home,
    review:review
};