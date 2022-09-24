var http = require("http");
http.createServer(display).listen(8888);
function display(request,response)
{
    response.write("Hello World")
    response.end();
}