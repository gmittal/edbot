# Ed Bot
Basic Facebook Messenger bot for education.

### Setup
```
$ npm install
```
Create a ```.env``` file in the project root populated with the following information (I used the Cleverbot API for example purposes):
```
FB_EMAIL=notyourreal@email.ext
FB_PASSWORD=fakeaccountpassword1234
CLEVERBOT_USER=3YyVOYYzZtwRfFiT
CLEVERBOT_KEY=1oZklYvgxJmMZzrqoZzjpBBEmP9XaoPM
```
Run the bot script:
```
$ node index.js
```
Now you can message the Facebook account with the credentials that are provided in the .env file and it should respond.
