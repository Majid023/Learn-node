var express = require("express");
var router = express.Router();
var jimp = require("jimp");

var fileName = "C:/Users/DELL/Documents/GitHub/Learn-node/app/public/images/top-wallpaper.jpg";
var copfile ="C:/Users/DELL/Documents/GitHub/Learn-node/app/public/images/hello.jpg";

var imageCaption = 'Image caption';
var loadedImage;

router.get("/makeimage",function(req,res){
    res.render("makeimg",{
        pageTitle: "makeimg"
    });
});

router.get("/makeimage/:string",function(req,res){
    jimp.read(fileName).then(function(image){
        loadedImage = image;
       
        return jimp.loadFont(jimp.FONT_SANS_32_WHITE);
    }).then(function(font){
      
        loadedImage.print(font,100,20,req.params.string).write(copfile);
    }).catch(function(err){
        
        console.error(err);

    });
    
    res.send( '<img src="/images/hello.jpg" alt="img" style="padding:0;margin:0;height:100%;width:100%"/>');
});
module.exports = router;