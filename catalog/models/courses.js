const mongoose = require('mongoose');

//Define the schema
//Note that we're including an _id property in this schema. When we don't include this property, MongoDB automatically generates a unique identifier for each document.
//But we're also allowed to choose the identifiers ourselves, which is useful when we want them to be readable.
// We'll be using strings like 'CS332' as identifiers for Course documents.
const Course = new mongoose.Schema({
  _id: {type: String, required: true, match: /CS\d\d\d/}, //including this to identify Course documents
  title: {type: String, maxlength: 100, trim: true},
  description: {type: String, maxlength: 1000, trim: true},
  prereqs = [{type: String, match: /CS\d\d\d/}]
});

//clean up sections and prereqs when a course is deleted
Course.post('findOneAndDelete', function(course){
  const queries = [
    mogoose.model('Section').deleteMany({course: course.id}),
    mongoose.model('Course').updateMany({prereqs: course.id}, {$pull: {prereqs: course.id}})
  ];
  Promise.all(queries).catch(error => next(error));
});

//Export the model
module.exports = mongoose.model('Course', Course);
