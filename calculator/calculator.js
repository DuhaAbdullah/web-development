//jshint esversion:6

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var results = num1 + num2;
  console.log(req.body);
  res.send("the results is :" + results);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var height = parseFloat(req.body.h);
  var weight = parseFloat(req.body.w);

  console.log(req.body);

  var bmi = weight / (height * height);
  res.send("the BMI is :" + bmi);
});

app.listen(5000, function () {
  console.log("server started on port 5000");
});
