var friends = require("../data/friends.js");
var newFriend;

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    newFriend = req.body
    friends.push(newFriend);
    res.json(true);
    // var newFriendScores = newFriend.scores
    // for(i=0; i<friends.length; i++) {
    //   var score = friends[i].scores
    //   for(i=0; i<newFriendScores.length; i++) {
    //   }
    // }
  })

  app.post("/api/clear", function() {
    friends = [];
  });
};
