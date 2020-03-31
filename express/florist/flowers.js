//handeling requests


//GET/flowers/
//this returns a list of flowers

//Get/Flowers/id

//POST/flowers

//Delete/flowers/id

//PUT/flowers/id

//POST/flowers/id

//let flowers.... this is making a pretend database and data standing in for a mongodb collection



//GET/flowers/
//we get the request and send the flowers list


//Get/Flowers/id
//we get the request, then look up the flower with the id in the pretend database
//if the request is undefined, we call next
//next() passes on the request to see if anyone else can handle it, if not it leads to a 404


//POST/flowers
//to handle a post request, use router.post instead of router.get
//POST and PUt requests contain bodies
//cosnt flower is going to be an object that contains the request
//flowers.push(flower) is adding flower to the database

//response; if it worked, send 201, if not, if error, its a client(user) error and the user is asking for something invalid
//so we send a 400

//if two flowers have same id or one doesnt have an id, thats an error

//alot of this stuff will be handled by mongo when we add it in


//Delete/flowers/id
//flowers.filter(f => f.id != flower.id) get all the flowers that dont have the id and send them back

//PUT/flowers/id
//usually the most complex kind of request because you want to make changes to it.
//if flower doesnt exist, reaches 404
//this will be easier with mongo

//check if there exists a color property , if it does then change its color to the body color
// then do the same thing for the season property
// then just send a response that says OK

///**** NOW WE HAVE CREATED THE REQUESTS AND WE CAN SEND THEM IN OUR index.ejs file

// Router for a flower collection
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database
let flowers = [
  {id: 'tulip', color: 'pink', season: 'spring'},
  {id: 'rose', color: 'red', season: 'summer'}
];

// GET /flowers
router.get('/', function(request, response) {
  response.send(flowers);
});

// GET /flowers/id
router.get('/:id', function(request, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next(); // Leads to 404
  } else {
    response.send(flower);
  }
});

// POST /flowers
router.post('/', function(request, response) {
  const flower = request.body;
  if (!flower.id) {
    response.status(400).send('Missing ID');
  } else if (flowers.find(f => f.id === flower.id)) {
    response.status(400).send('Duplicate ID');
  } else {
    flowers.push(flower);
    response.status(201).send(flowers);
  }
});

// DELETE /flowers/id
router.delete('/:id', function(request, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next(); // Leads to 404
  } else {
    flowers = flowers.filter(f => f.id !== flower.id);
    response.status(200).send(flowers);
  }
});

// PUT /flowers/id
router.put('/:id', function(request, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next(); // Leads to 404
  } else {
    if (request.body.color) flower.color = request.body.color;
    if (request.body.season) flower.season = request.body.season;
    response.status(200).send(flowers);
  }
});

module.exports = router;
