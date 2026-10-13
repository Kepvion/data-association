
var express = require("express");
var router = express.Router();

const userModel = require("./users");
const postModel = require("./post");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res, next) {
  
    let createduser = await userModel.create({
      username: "priya123",
      password: "hashed_password_here",
      posts: [],
      dp: "https://example.com/profile.jpg",
      email: "priya@example.com",
      fullName: "Priya Kumari",
    });

    res.send(createduser);


  
});

router.get('/createpost',async function(req,res,next){
  let createdpost = await postModel.create({
    postText: "Hello guyss",
    user: "6ace51b1810b4f9fe96734a9"
  })
  let user = await userModel.findOne({_id:"6ace51b1810b4f9fe96734a9"});
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
})

module.exports = router;