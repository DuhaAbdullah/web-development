const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "f890467a6cb934a4f1a7d7387a2920b9";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const object = {
        name: "Doha",
        favouriteFood: "pizza",
      };
      console.log(JSON.stringify(object));
      const temp = weatherData.main.temp;

      const weatherDescription = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;

      const imageUrl = " http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.set("Content-Type", "text/html");

      res.write(
        "<h3>The Tempreture in " + query + " is : " + temp + " celcius degrees</h3>"
      );
      res.write(
        "<p>the weather description in :" + weatherDescription + "</p>"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(5000, function () {
  console.log("server is running on 5000");
});
