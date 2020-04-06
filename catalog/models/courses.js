const mongoose = require('mongoose');

//Define the schema
//Note that we're including an _id property in this schema. When we don't include this property, MongoDB automatically generates a unique identifier for each document.
//But we're also allowed to choose the identifiers ourselves, which is useful when we want them to be readable.
// We'll be using strings like 'CS332' as identifiers for Course documents.
const Course = new mongoose.Schema({
  _id: String, //including this to identify Course documents
  title: String,
  description: String,
  prereqs = [String]
});

//Export the model
module.exports = mongoose.model('Course', Course);
