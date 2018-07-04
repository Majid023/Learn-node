var express = require("express");
var  app = express();
var datafile = require("./data/data.json");
app.use(require("./routers/index"));
app.use(require("./routers/friends"))
//var port = 3000;

app.set("port",process.env.PORT||4000);


app.listen(app.get("port"));
console.log("server is started on port : " + app.get("port"));



/*var http = require("http");
var port = 3000;

var app = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
   response.write("<h1>Hello world</h1>");
   response.end();
});
app.listen(port);
console.log("Hello i am server"+port);*/