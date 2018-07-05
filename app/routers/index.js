var express = require("express");
var router = express.Router();

router.get("/",function(request,response){

    response.send('<link rel="stylesheet" type="text/css" href="/css/style.css"/> <img alt="img" src="/images/img.jpg" height="400px" width="100%" style="border:3px solid" /> <script src="/reload/reload.js"></script>');
});


module.exports =  router;