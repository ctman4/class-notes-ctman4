
/*
Get comfortable with the syntax for promises.


1. Suppose an asynchronous function f can be called as shown below. If f returns a promise, how can we rewrite this code to get the same effect?
*/
f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

//f('hello').then(result => console.log(result)).error(error => console.error(error.stack));

f('hello')
  .then(result => console.log(result))
  .error(error => console.error(error.stack))


  





/*
2. Suppose q1 and q2 are Mongoose queries. You want to run q1 and print the result, and afterwards run q2 and print the result. Write some code to do this in two ways: without promises, and with promises.
*/


/*
3. Suppose documents is an array of Mongoose documents that have been created but not saved. You want to save them all at once (that is, in parallel). Write some code to do this.
*/
