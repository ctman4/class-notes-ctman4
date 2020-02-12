// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

// Create some faculty
const harcourt = new Professor({
  name: 'Ed Harcourt',
  rank: 'Full',
  started: 2003,
  courses: [140, 220, 345, 362, 364]
});

const torrey = new Professor({
  name: 'Lisa Torrey',
  rank: 'Associate',
  started: 2009,
  courses: [140, 219, 332, 362, 374, 380]
});

const lee = new Professor({
  name: 'Choong-Soo Lee',
  rank: 'Associate',
  started: 2010,
  courses: [140, 219, 256, 321, 370]
});

// Delete any previous data
mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));



  //use the APIs on mogoose website to use things like find() to make these
  //What are names in alphebetical order?

  //who started most recently?



  //Who teaches 332?



  //What are all the ranks?
  //Do this that will list the ranks without listing the same rank more than once
  //lisa and chong soo have the same rank but we dont want to see it twice



  //when looking at articles online only use stuff thats recent because stuff changes very fast

  //map operation takes an array of something and creates another array
  //In this case we have a professor object with a corresponding name and
  //we are mapping the objects to the array of names

  //to avoid nesting, use a chain of .then()s for the callbacks. This is just a long chain of method calls
  //then use a catch at the end of the code which will catch any errors that occur
  //then we replace the 'function' calls with mapping: .then(() => harcourt.save())
]
