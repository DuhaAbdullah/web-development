const mongoose = require("mongoose");
const ejs = require("ejs");
// const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("articls", articleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    console.log(req.body);
    Article.create(req.body)
      .then((results) => {
        console.log(results);
        res.send(results);
      })
      .catch((error) => {
        res.send(error);
      });
  })
  .delete((req, res) => {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Succesfully Deleted all articles");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/articles/:articleTitle")

  .get((req, res) => {
    console.log(req);
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No articles was found !");
        }
      }
    );
  })

  .put((req, res) => {
    Article.findOneAndUpdate(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Succesfully updated !");
        }
      }
    );
  })

  .patch((req, res) => {
    Article.findByIdAndUpdate(
      { title: req.params.articleTitle },
      { $set: { title: "FOO" } },
      function (err) {
        if (!err) {
          res.send("Succesfully updated !");
        }
      }
    );
  })

  .delete((req, res) => {
    Article.deleteOne(
      { title: req.params.articleTitle },
      function (err) {
        if (!err) {
          res.send("Succesfully updated !");
        }
      }
    );
  });

app.listen("3000", function (req, res) {
  console.log("server is up !");
});
