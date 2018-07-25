var express = require("express");
var router = express.Router();
var jimp = require("jimp");
var url = require("url");
var data = require("../data/simple data.json");
var uc = require("upper-case");

var fileName = "C:/Users/DELL/Documents/GitHub/Learn-node/app/public/images/top-wallpaper.png";
var copfile ="C:/Users/DELL/Documents/GitHub/Learn-node/app/public/images/hello.png";

var imageCaption = 'Image caption';
var loadedImage;

//router.get("/makeimage",function(req,res){
    //res.render("makeimg",{
      //  pageTitle: "makeimg"
    //});
    
//});

router.get("/makeimage",function(req,res){
    var q =url.parse(req.url,true).query;
    var text = q.message;

    jimp.read(fileName).then(function(image){
        loadedImage = image;
       
        return jimp.loadFont(jimp.FONT_SANS_16_BLACK);
    }).then(function(font){
      
        loadedImage.print(font,30,30,uc(data.title),340)
        loadedImage.print(font,50,200,data.description,500).write(copfile);
        res.render("makeimg1",{
            pageTitle: "text convert into image"
        });
    }).catch(function(err){
        
        console.error(err);

    });
    
   
});
module.exports = router;