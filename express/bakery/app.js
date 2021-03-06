// Bakery web server
const express = require('express');

// Create the server
const app = express();

// Use a view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Ignore icon requests
// Ignore Icon requests and handle them before we get to logging
// finish this app.get('favicon.ico', function(request, response))
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

//order of gets matters, top to bottom

// Log requests to the console
// log requests to the console (good for debugging)
// this is called on every request as soon as it arrives
app.use(function(request, response, next) {
  console.log('---------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next(); // Keep handling this request
});

// cs-linuxlab-##.stlawu.edu:3000/
app.get('/', function(request, response) {
  response.render('index');
});

// Routing
app.use('/cakes', require('./cakes.js'));
app.use('/pies', require('./pies.js'));

// Handle undefined routes
app.use(function(request, response, next) {
  console.log('Replied with 404');
  response.status(404).end();
});

// Handle other errors
app.use(function(error, request, response, next) {
  console.error(error.stack);
  response.status(500).send(error.message);
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
