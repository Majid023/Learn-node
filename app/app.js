var http = require("http");
var port = 3000;

var app = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
   response.write("<h1>Hello world</h1>");
   response.end();
});
app.listen(port);
console.log("Hello i am server"+port);