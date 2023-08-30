const express  = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
let items = ["cook food" , "Bathing" , "washing"];
let newitems = [];
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){


  let day = date.getDate();
  res.render("list",{
    listTitle:day , itemAdded:items
  });
});
app.post("/",function(req,res){
   item = req.body.itemadded;
   console.log(req.body.list);
   if(req.body.list ==="Work") {
     newitems.push(item);
     res.redirect("/work");
   }else{
     items.push(item);
     res.redirect("/");
   }

});
app.get("/work",function(req,res){
  res.render("list",{
    listTitle:"Work list" , itemAdded:newitems
  });
});


app.get("/about", function(req,res){
  res.render("about");
});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
