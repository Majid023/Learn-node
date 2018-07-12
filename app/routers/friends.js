var express = require("express");
var router = express.Router();

//var datafile = require("../data/data.json");



router.get("/friends",function(request,response){

    var data = request.app.get("appData");
    var pagefriends = data.friends;
    response.render("friends",{
        pageTitle: "Friends Lists",
        friends : pagefriends,
        pageId : "friends"
    });
});


router.get("/friends/:frndID",function(request,response){
    var data = request.app.get("appData");
    var pagefriends = data.friends;
    var indexVal =  request.params.frndID;
   response.render("friend",{
       pageTitle : "friend",
       pageId : "friend",
       index :indexVal,
       friends : pagefriends

   })
   
});

module.exports = router;