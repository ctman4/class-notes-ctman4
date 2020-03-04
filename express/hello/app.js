// Hello world web server
const express = require('express');

//create the server
const app = express();

//respond to one request
app.get('/', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  response.send("Hello Charlie")
});


//this line starts the server
app.listen(3000); //3000 is the port, like an adress...
console.log('Server is ready.')
