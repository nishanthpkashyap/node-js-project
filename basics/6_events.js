var events =  require("events");
var eventEmitter = new events.EventEmitter();
function ringBell()
{
    console.log("Ring Ring Ring");
    eventEmitter.emit("bell rings","welcome to ","ABC store");
}

function greet(message,shop)
{
    console.log(message+shop);
}
eventEmitter.on("open door",ringBell);
eventEmitter.on("bell rings",greet);
eventEmitter.emit("open door");

