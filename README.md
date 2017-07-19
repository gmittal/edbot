# Ed Bot
Basic Facebook Messenger bot for education using Wolfram Alpha.

### Setup
```
$ npm install
```
Create a ```.env``` file in the project root populated with the following information:
```
FB_EMAIL=notyourreal@email.ext
FB_PASSWORD=fakeaccountpassword1234
WOLFRAM_APP_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Run the bot script:
```
$ node index.js
```
Now you can message the Facebook account with the credentials that are provided in the .env file and it should respond.
