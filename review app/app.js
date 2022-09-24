var server = require("./server.js");
var router = require("./router");
var handler = require("./handler");

var handle = {};
handle["/"]=handler.home;
handle["/home"]=handler.home;
handle["/review"]=handler.review;

server.startServer(router,handle);