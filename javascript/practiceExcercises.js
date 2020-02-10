// 1. Print the sum of the squares from 1 through 10
y = 0;
for (let x = 0; x < 10; x ++){
  y += x ** 2;
}
console.log(y);

// 2. Print the Fibonacci number that is greater than 1000.
n = 0;
l = 1;
while(n <= 1000){
  n = n + l;
  l = l + n;
  console.log(1);

}
//Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both



//Get comfortable with the syntax for objects, arrays, and functions.

//1. Create an array of objects representing the courses you are taking this semester. Each course should have a subject (e.g. 'CS') and a number (e.g. 332). Iterate through this array to find the largest course number in your schedule.

const courses = ['CS332', 'CS220', 'MATH315', 'MUS100'];
for(const)

console.log(courses[]);
//2. Define a constructor function for Book objects. Each book should have a title and an array of authors. Define a shared method for books that lets you check whether a given author was one of the authors in this book.


const Books = function(title, authors){
  this.title = title;
  this.authors = authors;
};

Books.shared = function(author){
  for(const a of this.authors){
    if(a === author){
      console.log(a);
    }

  }
}

//3. Define a function that works like the range function in Python. For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].

//////////////////////////////////////////////////////////////////////////////////// Exercise #1

// Create an array of objects representing the courses you are taking this semester.
const courses = [
  {subject: 'CS', number: 220},
  {subject: 'CS', number: 332},
  {subject: 'MATH', number: 315},
  {subject: 'MUS', number: 100}

];

// Iterate through this array to find the largest course number in your schedule.

let largest = 0;
for (const course of courses){
  if (course.number > largest){
    largest = course.number;
  }
}

//////////////////////////////////////////////////////////////////////////////////// Testing #1

console.log(largest);
//////////////////////////////////////////////////////////////////////////////////// Exercise #2

// Define a constructor function for Book objects.


// Define a shared method for books that lets you check whether a given author was one of the authors in this book.


//////////////////////////////////////////////////////////////////////////////////// Testing #2



//////////////////////////////////////////////////////////////////////////////////// Exercise #3

// Define a function that works like the range function in Python.


//////////////////////////////////////////////////////////////////////////////////// Testing #3
