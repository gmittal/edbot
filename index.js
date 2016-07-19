var dotenv = require('dotenv');
dotenv.load();

var wolfram = require('wolfram-alpha').createClient(process.env.WOLFRAM_APP_ID);
var login = require("facebook-chat-api");
var http = require('http');
var fs = require('fs');
var Hashids = require('hashids');
var id = new Hashids("salt", 11);

function rand_n() {
  return Math.floor(Math.random()*100000000000000000000000)+1;
}

// Create simple echo bot
login({email: process.env.FB_EMAIL, password: process.env.FB_PASSWORD}, function callback (err, api) {
  if(err) return console.error(err);

  api.listen(function callback(err, message) {
      // Process the input
      var query = message.body;

      wolfram.query(query, function (err, result) {
        if (err) throw err;

        var messages = [];
        for (var ix = 0; ix < result.length; ix++) {
          var uid = id.encode(rand_n());
          var file = fs.createWriteStream(__dirname+"/"+uid+".gif");
          api.sendMessage(result[ix].title, message.threadID);
        }




      });

  });
});
