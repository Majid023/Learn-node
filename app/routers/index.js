var express = require("express");
var router = express.Router();

router.get("/",function(request,response){
    var info="";
    datafile.friends.forEach(function(item){
        info +='<h1>'+ item.title  +'</h1>';
         
    });
    response.send(info);
});

module.exports =  router;