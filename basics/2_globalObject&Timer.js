//console.log(__filename);
//console.log(__dirname);
function func()
{
    console.log("This statement gets executed after 2secs");
}
//setTimeout(,2000);
setInterval(func,2000)