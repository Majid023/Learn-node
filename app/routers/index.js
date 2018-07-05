var express = require("express");
var router = express.Router();

router.get("/",function(request,response){

    response.send('<img alt="img" src="/images/img.jpg" height="400px" width="100%" style="border:3px solid" />');
});


module.exports =  router;