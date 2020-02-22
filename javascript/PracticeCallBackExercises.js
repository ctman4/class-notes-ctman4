/*
1. JavaScript arrays have a filter method that works like this:

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
Try it out, and then write your own filter function, which would be called like this instead:

const numbers = [1, 2, 3, 4, 5];
const odds = filter(numbers, x => x%2 > 0);
*/

const filter = function(array, test){
  const copy[];
  for (const element of array){
    if (test(element)) {
      copy.push(element);
    }
  }
  return copy;
};

/*
2. JavaScript arrays have a sort method that works like this:

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b) => a - b);
Try it out, and read about how it works. Then rewrite the arrow function to reverse sort the array instead.
*/

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b) => b - a);//there must be a function inside the sort(),
//if not, then the elements are sorted based on their values. if function(a,b) is positive, then the sort() will put b at a
// lower index than a.
// if sort is neg, then the function will put a at a lower index then b.

/*
3. Write a program that reads this file, which shows the distribution of majors and minors for the class of 2019. Each line has the name of a discipline, the number of majors, and the number of minors, with commas separating these values.

Create an array of objects, so that each line of the file is represented by an object with three properties. Then use the sort method (with a new arrow function) to sort disciplines by popularity. Let the popularity score for a discipline be the number of majors it has plus half the number of minors.

There is a split method that will come in handy for this exercise.
*/
