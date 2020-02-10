//Define a plan for a collection, Schema is a plan
const mongoose = require('mongoose');

//Schema for a collection of professors
const Professor = new mongoose.Schema({
  //four columns
  name: String,
  rank:String,
  started: Number,
  courses: [Number]//an array
});

//Speed up queries on all fields //allows to search in each column
Professor.index({name:1});
Professor.index({rank:1});
Professor.index({started:1});
Professor.index({courses:1});

//Compile and export this Schema
module.exports = mongoose.model('Professor', Professor);
