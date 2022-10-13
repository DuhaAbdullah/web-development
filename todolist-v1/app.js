const express = require("express");
const body = require("body-parser");
const date = require(__dirname + "/data.js");
const day = require(__dirname + "/data.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(body.urlencoded({ extended: true }));

app.use(express.static("public"));

let items = ["Buy Food ", " Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  console.log(req.body);
  if (req.body.list === "work") {
    workItems.push(item);
  }
  items.push(item);
  console.log(item);

  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work list", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(5000, function () {
  console.log("server running on port 5000");
});

// app.get("/", function (req, res) {
//   let today = new Date();
//   var currentDay = today.getDay();
//   let day = "";

//   if (currentDay === 6 || currentDay === 0) {
//     day = "weekend";
//     if (currentDay === 6) {
//       day = "Saturday";
//     } else {
//       day = "Sunday";
//     }
//     res.sendFile(__dirname + "/weekend.html");
//     res.send("yay it's the weekend!");
//   } else {
//     res.write("<p> it is not the weekend !</p>");
//     res.write("<h1>Boo I have to work!</h1>");
//     res.send();
//     if (currentDay === 1) {
//       day = "Monday";
//     } else if (currentDay === 2) {
//       day = "Tuesday";
//     } else if (currentDay === 3) {
//       day = "Widnesday";
//     } else if (currentDay === 4) {
//       day = "Thursday";
//     } else {
//       day = "Friday";
//     }
//     res.sendFile(__dirname + "/weekday.html");
//   }

//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Widnesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.log("error accure " + currentDay);
//   }
//   res.render("list", { kindOfDay: day });
// });
