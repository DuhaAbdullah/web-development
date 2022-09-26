//jshint esversion:6

const { application } = require("express");
const express = require("express"); //require the package
const app = express(); // app global name
app.get("/", function (request, respond) {
    respond.send("hello love");
  });
  

app.get("/contact", function(req, res){
    res.send("contact me at doha@doha.com");
})

app.get("/about", function(req, res){
    res.send("i'm doha abdullah learning how to code and I love chocolate")
})

app.get("/skills", function(req, res){
    res.send("lololol")});

app.listen(5000, function () {
    console.log("server started on port 5000");
  }); //listen to the port
  