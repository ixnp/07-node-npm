'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express')
const app = express();
const bodyParser = require('body-parser').urlencoded();
const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));
//give us a rout for everything we have in public//

app.get('/new', function(request, response) {
response.sendFile('./public/new.html');
  // TODO: Using the response object, send the index.html file back to the user
});
//took these last two from the video//
app.post('/articles', bodyParser, function(request,reponse){
  console.log(request.body);
  response.send('Posted to server!')
});
// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {
  console.log('Server started on port ${'PORT'}!');
  // TODO: Log to the console a message that lets you know which port your server has started on
});
