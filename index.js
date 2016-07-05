var dotenv = require('dotenv');
dotenv.load();
var cleverbot = require('cleverbot.io');
var bot = new cleverbot(process.env.CLEVERBOT_USER, process.env.CLEVERBOT_KEY);
var login = require("facebook-chat-api");



// Create simple echo bot
login({email: process.env.FB_EMAIL, password: process.env.FB_PASSWORD}, function callback (err, api) {
  if(err) return console.error(err);

  api.listen(function callback(err, message) {
      // Process the input
      var m = message.body;


      bot.setNick(message.senderID);
      // Very basic cleverbot example
      // bot.create(function (err, session) {
          bot.ask(m, function (e, r) {
            // and send back bot output
            api.sendMessage(r, message.threadID);
          });
      // });


  });
});
