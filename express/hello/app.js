// Hello world web server
const express = require('express');

//create the server
const app = express();

//cs-linuxlab-04.stlawu.edu:3000/
//respond to one request
app.get('/', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  response.send("Hello Charlie")
});

//cs-linuxlab-04.stlawu.edu:3000/foo

app.get('/foo', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  response.send("Hello foo")
});

//cs-linuxlab-04.stlawu.edu:3000/foo/bar

app.get('/foo/bar', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  response.send("Hello bar")
});

//cs-linuxlab-04.stlawu.edu:3000/zap/z (for any z)
// this means that whatever comes after the zap/, z in this case, it will get
app.get('/zap/:z', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  response.send("Hello ${request.params.z}")
});

//finish this
//app.get('/zap/:z', function(request, response){//hey app server, listen for a get request, the '/' is the path and function is a callback
  //response.send('Hello zap with${request.query.x} and {request.query.y}')

//this line starts the server
app.listen(3000); //3000 is the port, like an adress...
console.log('Server is ready.')
