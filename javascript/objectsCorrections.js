//////////////////////////////////////////////////////////////////////////////////// Exercise #1

// Create an array of objects representing the courses you are taking this semester.
const courses = [
  {subject: 'CS', number: 140},
  {subject: 'CS', number: 140},
  {subject: 'CS', number: 332}
];

// Iterate through this array to find the largest course number in your schedule.
let largest = 0;
for (const course of courses) {
  if (course.number > largest) {
    largest = course.number;
  }
}

//////////////////////////////////////////////////////////////////////////////////// Testing #1

console.log(largest); // 332

//////////////////////////////////////////////////////////////////////////////////// Exercise #2

// Define a constructor function for Book objects.
const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;
};

// Define a shared method for books that lets you check whether a given author was one of the authors in this book.
Book.prototype.isBy = function(name) {
  for (const author of this.authors) {
    if (name === author) {
      return true;
    }
  }
  return false;
};

//////////////////////////////////////////////////////////////////////////////////// Testing #2

const book = new Book('Big Red Barn', ['Margaret Wise Brown', 'Felicia Bond']);
console.log(book.isBy('Margaret Wise Brown')); // true
console.log(book.isBy('Felicia Bond')); // true
console.log(book.isBy('Clement Hurd')); // false

//////////////////////////////////////////////////////////////////////////////////// Exercise #3

// Define a function that works like the range function in Python.
const range = function(a, b) {

  let low = 0;
  let high = 0;

  if (a !== undefined && b !== undefined) {
    low = a;
    high = b;
  } else if (a !== undefined) {
    low = 0;
    high = a;
  }

  const array = [];
  for (let i = low; i < high; i++) {
    array.push(i);
  }

  return array;
};

//////////////////////////////////////////////////////////////////////////////////// Testing #3

console.log(range()); // []
console.log(range(5)); // [0,1,2,3,4]
console.log(range(3, 8)); // [3,4,5,6,7]
