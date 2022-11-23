// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db("fruitsDB");
//     const products = database.collection("products");

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { _id: 1 };
//     const product = await products.findOne(query);
//     console.log(product);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/embadedDB");

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check ur data entries and add a name"],
  },
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "pretty solid as a fruit.",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 7,
  review: "to sour for me",
});

const orange = new Fruit({
  name: "orange",
  rating: 10,
  review: "awosome",
});

const banana = new Fruit({
  name: "banana",
  rating: 10,
  review: "I only can drink it",
});

const peach = new Fruit({
  name: "peach",
  rating: 10,
  review: "peaches ",
});

Fruit.insertMany([peach, apple, kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully worked");
  }
});

const pineapple = new Fruit({
  name: "pineapple",
  rating: 10,
  review: "refrishing ",
});

pineapple.save();

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     // mongoose.connection.close();

//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne(
//   { _id: "62e6832833f291a5b0fd9fe8" },
//   { name: "peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully updated");
//     }
//   }
// );

// Fruit.deleteOne(
//   { _id: "62e6b7cdc6daad13aa2b283a" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully deleted");
//     }
//   }
// );

// mongoose.connect("mongodb://localhost:27017/peoples");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Doha",
  age: 32,
  favouriteFruit: pineapple,
});

person.save();

// Person.deleteMany({ name: "Anas" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }
// });
