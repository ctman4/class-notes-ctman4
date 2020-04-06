// Mongoose schema for sections. Note that we're using Date as the type of the time property.
// This type refers to a JavaScript Date, which can be constructed like new Date('1/15/2020 12:50 PM').
// For convenience, we're defining a Mongoose setter that allows us to write time properties as strings like '12:50 PM' instead.
//The setter will quietly convert these strings into Date objects for us.
//We're also defining some virtual properties to convert Date objects back into two kinds of time strings.
//When we're working with Section documents, we'll be able to pretend they have string properties time12 and time24.
const mongoose = require('mongoose');

// Define the schema
const Section = new mongoose.Schema({
  course: {type: String, required: true, match: /CS\d\d\d/},
  day: {type: String, required: true, enum: ['M/W', 'M/W/F', 'T/TH', 'W/F']},
  time: {type:Date, required:true},
  instructor: {type: String, required: true, maxlength: 25, trim:true}
});

// using a setter
// Setters allow you to transform the data before it gets to the raw mongodb document or query.
// Convert incoming time strings to Date objects
Section.path('time').set(function(time) {
  return new Date(`1/15/2020 ${time}`);
});

// Provide a 12-hour time string as a virtual property
Section.virtual('time12').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
});

// Provide a 24-hour time string as a virtual property
Section.virtual('time24').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour12: false});
});

// Export the model
module.exports = mongoose.model('Section', Section);
