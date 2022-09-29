const express = require("express");
const app = express();

app.get("/", function (request, respond) {
  respond.send("<h1>hello</h1>");
});

app.get("/contact", function(req , res){
    res.send("contact me at do7a.ab@gmail.com");
})

app.listen(3000, function () {
  console.log("the server is on");
});
