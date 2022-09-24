function route(pathname,handle,response,data)
{
    console.log("routing req for "+pathname);
    if(typeof(handle[pathname])==="function")
        handle[pathname](response,data);
    else
    {
        console.log("Invalid request for ' "+pathname+" '");
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("Error 404 !!\nPage Not Found !!");
        response.end();
    }
}

module.exports = {
    route : route
};