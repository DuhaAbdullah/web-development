```js

const mongoose = require("mongoose");
const ejs = require("ejs");
const body = require("body-parser");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("articls", articleSchema);

app.get("/articles", function (req, res) {
  Article.find({}, function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

app.post("/articles", function (req, res) {
  Article.create(req.body)
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen("3000", function (req, res) {
  console.log("server is up !");
});```