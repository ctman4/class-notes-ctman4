// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});*/

const queries = [

  // What are names in alphabetical order?
  Professor.find().sort('name'),

  // Who started most recently?
  Professor.find().sort('-started').limit(1),

  // Who started in 2003?
  Professor.find().where('started').equals(2003),

  // Who teaches 362?
  Professor.find().where('courses').in(362),

  // What are all the ranks?
  Professor.distinct('rank')
];

// Professor.find().sort('name')
queries[0].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Names in order: ', names);
});

// Professor.find().sort('-started').limit(1)
queries[1].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Started most recently: ', names);
});

// Professor.find().where('started').equals(2003)
queries[2].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Started in 2003: ', names);
});

// Professor.find().where('courses').in(362)
queries[3].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Teaches 362: ', names);
});

// Professor.distinct('rank')
queries[4].exec(function(error, ranks) {
  if (error) console.error(error.stack);

  console.log('Distinct ranks: ', ranks);
});



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
]
