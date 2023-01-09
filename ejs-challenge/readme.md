```js


app.get("/posts/:postName", function (req, res) {
  const requestedTitle = _.lowerCase(req.params.postName);
  // console.log(req.params.postName)
  postsList.forEach(function (post) {
    const storedPost = _.lowerCase(post.title);
    // console.log(post.title);
    // console.log("body title : " + req.body.title);
    // console.log("body content  : " +  req.body.content );
    if (requestedTitle === storedPost) {
      res.render("post", { title: req.body.title, content: req.body.content });
 
    } else {
      console.log("not a match");
    }
  });
});```