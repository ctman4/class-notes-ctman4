//Next we'll update the course controller to render the course page
//you've seen. Recall what that page looked like: a menu of courses,
//along with the details of the currently selected course.
//To create this view, we need to perform
//two queries: one that lists all the course identifiers,
//and one that retrieves a course document given its identifier.
//We're using Promise.all to run these queries in parallel. And
//we're passing any MongoDB errors back up to app.js via the next callback.
const Course = require('../models/course');

// GET /courses
module.exports.index = function(request, response, next) {
  Course.distinct('_id')
    .then(courseIDs => response.redirect(`/courses/${courseIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Course.findById(request.params.id),
    Course.distinct('_id')
  ];

  Promise.all(queries).then(function([course, courseIDs]) {
    if (course) {
      response.render('courses/index', {course: course, courseIDs: courseIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};

// POST /courses (with the new course in the request body)
module.exports.create = function(request, response, next) {
  Course.create(request.body)
    .then(course => response.status(201).send(course.id))
    .catch(error => next(error));
};

// DELETE /courses/:id
module.exports.delete = function(request, response, next) {
  Course.findByIdAndDelete(request.params.id)
    .then(course => course ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /courses/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  request.body.prereqs = request.body.prereqs || []; // Replace undefined with [] to remove all prereqs

  Course.findByIdAndUpdate(request.params.id, request.body, {runValidators: true})
    .then(course => course ? response.status(200).end() : next())
    .catch(error => next(error));
};
