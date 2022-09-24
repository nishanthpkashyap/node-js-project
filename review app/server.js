var http = require("http");
var url = require("url");
var formidable = require("formidable");

function startServer(router,handle)
{
    http.createServer(function(request,response)
    {
        var data = "";
        var pathname = url.parse(request.url).pathname;
        request.addListener("data",function(chunk)
        {
            data+=chunk;
        });
        request.addListener("end",function()
        {
            router.route(pathname,handle,response,data);
        })
    }).listen(8888);
    console.log("Server started on localhost port 8888");

}

module.exports = {
    startServer : startServer
};