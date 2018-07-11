var express = require("express");
var app = express();
var reload = require("reload");

var datafile = require("./data/data.json");
app.use(require("./routers/index"));
app.use(require("./routers/friends"))
//var port = 3000;


app.use(express.static("app/public"));
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set("views","app/views");


var Server = app.listen(app.get("port"));
console.log("server is started on port : " + app.get("port"));

reload(Server,app);















/*var http = require("http");
var port = 3000;

var app = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
   response.write("<h1>Hello world</h1>");
   response.end();
});
app.listen(port);
console.log("Hello i am server"+port);*/