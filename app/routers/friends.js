var express = require("express");
var router = express.Router();
var datafile = require("../data/data.json");
router.get("/firstName",function(request,response){
    var info="";
    datafile.friends.forEach(function(item){
        info +='<h1>'+ item.firstName +'</h1>';
         
    });
    response.send(info);
});


router.get("/firstName/:frndID",function(request,response){
    var info="";
    var i = datafile.friends[request.params.frndID];
        info +='<h1>'+ i.firstName +'</h1>';
    response.send(info);
});

module.exports = router;