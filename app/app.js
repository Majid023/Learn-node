var express = require("express");
var  app = express();
var datafile = require("./data/data.json");
var port = 3000;

app.get("/",function(request,response){
    response.send("<h1>Hii.. I am server.</h1><br/><h1>How are you?</h1>");
});
app.listen(port);
console.log("server is started on port : " + port);
 



/*var http = require("http");
var port = 3000;

var app = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
   response.write("<h1>Hello world</h1>");
   response.end();
});
app.listen(port);
console.log("Hello i am server"+port);*/