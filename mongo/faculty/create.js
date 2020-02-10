// Store some data in the faculty database

const mongoose = require('mongoose');

const connect = require('./db');

const Professor = require('./schema');

connect();// connect to the database
//any commands before the connection are added to the cue, not asynchronous in this specific case

//all commands in the database are asynchronous

const harcourt = new Professor({
  name: 'Ed Harcourt',
  rank: 'Full',
  started: 2003,
  courses:[140, 220, 345]
});

const torrey = new Professor({
  name: 'Lisa Torrey',
  rank: 'Associate',
  started: 2009,
  courses:[140, 219, 332, 362, 374, 380]
});

const lee = new Professor({
  name: 'Choong-Soo Lee',
  rank: 'Associate',
  started: 2010,
  courses:[140, 219, 256, 321, 370]
});


// Delete any previous data
mongoose.connection.dropDatabase(function() {

  // Save the new data
  harcourt.save(function(error) {
    if (error) console.error(error.stack);

    torrey.save(function(error) {
      if (error) console.error(error.stack);

      lee.save(function(error) {
        if (error) console.error(error.stack);

        //We do this if (error) to make sure they save before closing (it is asynchronous)
        // Disconnect
        mongoose.connection.close(function() {
          console.log('Database is ready.');
        });
      });
    });
  });
});
