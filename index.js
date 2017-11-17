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
      var query = message.body;
      wolfram.query(query, function (err, result) {
        if (err) throw err;

        var ix = 0;
        nastyRecursive();
        function nastyRecursive() {
          if (ix < result.length) {
            var uid = id.encode(rand_n());
            var file = fs.createWriteStream(__dirname+"/"+uid+".gif");
            console.log(result[ix].title);
            var request = http.get(result[ix].subpods[0].image, function(response) {
              response.pipe(file);

              api.sendMessage({body:result[ix].title +":", attachment: fs.createReadStream(__dirname + '/'+uid+'.gif')}, message.threadID);
              ix++;
              nastyRecursive();
            });
          }
        }
      });
  });
});
