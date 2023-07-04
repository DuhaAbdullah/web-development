const express = require("express");
const body = require("body-parser");
const { default: mongoose } = require("mongoose");
const date = require(__dirname + "/data.js");
const day = require(__dirname + "/data.js");
const _ = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(body.urlencoded({ extended: true }));

app.use(express.static("public"));

// let items = ["Buy Food ", " Cook Food", "Eat Food"];
let workItems = [];

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("item", itemsSchema);

const item1 = new Item({
  name: "welcome to your to do list!",
});

const item2 = new Item({
  name: " hit the + button to add a new item",
});

const item3 = new Item({
  name: "<-- hit this to delete an item ",
});

const defualtItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("list", listSchema);

app.get("/", function (req, res) {
  // let day = date.getDate();
  Item.find({}, function (err, findItems) {
    if (findItems === 0) {
      Item.insertMany(defualtItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully loged in");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: findItems });
    }
  });
});

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defualtItems,
        });

        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work list", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  item.save();
  res.redirect("/");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  // create new document
  const item = new Item({
    name: itemName,
  });
  item.save();

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
  // if (req.body.list === "work") {
  //   workItems.push(item);
  // }

  // items.push(item);

  // res.redirect("/");
});

app.post("/delete", function (req, res) {
  const checkItemId = req.body.checkbox;
  const listname = req.body.listName;

  if (listname === "today") {
    Item.findByIdAndRemove(checkItemId, function (err) {
      if (!err) {
        console.log("successfuly deleted an item ");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate(
      { name: listname },
      { $pull: { items: { _id: checkItemId } } },
      function (err, foundList) {
        if (!err) {
          res.redirect("/" + listname);
        }
      }
    );
  }
});

app.listen(3000, function () {
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

