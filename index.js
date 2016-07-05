var dotenv = require('dotenv');
dotenv.load();
var login = require("facebook-chat-api");

// Create simple echo bot
login({email: process.env.FB_EMAIL, password: process.env.FB_PASSWORD}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.threadID);
    });
});
