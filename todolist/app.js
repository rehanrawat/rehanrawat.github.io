const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items =["Eat","Code","Sleep"];
let workItems = [];

app.get("/", function(req,res){

    let day = date.getDate();
    res.render("index", {listTitle: day, newItems: items});
})

app.post("/", function(req, res){
    let item = req.body.nextItem;

    if(req.body.list ==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    
     
})

app.get("/work", function(req,res){
     res.render("index", {listTitle: "Work List", newItems: workItems})
})

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server Started!");
})