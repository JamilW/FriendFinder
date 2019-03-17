const friendsData = require("../data/friends.js");

module.exports = function(app)  {
    app.get("./api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("./api/friends", function(req, res)    {
        var comparison = 100;
        var seekingFriend = req.body;
        var score = seekingFriend.scores;
        
        for (var i=0; i < friends.length; i++)  {
            console.log(friends[i].name);
            console.log(friends[i].photo);
            name = "";
            photo = "";
            var friendMath = math.abs(parseInt(friends[i].scores) - parseInt(score.scores))
                if(friendMath < comparison) {
                    comparison = friendMath;
                    name = friends[i].name;
                    photo = friends[i].photo;
                }
        }
        friends.push(seekingFriend);    
    });
};