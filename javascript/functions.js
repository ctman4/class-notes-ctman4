//function syntax

//function definition
 const avg = function(a, b){
   return (a + b) / 2;

 }; // semi colon because assign function to variable


 // function call
 console.log(avg(5, 6));


 //Another defintion
 const print = function(a, b) {
   console.log(`a = ${a}, b = ${b}`);

 };

 //undefined values
 const result = print(7, 8);
 console.log(result);
 print(9);//undefined


 //object literal with a method
 const rectangle = {
   width: 10,
   height: 20,
   area: function(){
     return this.width * this.height;

   }
 };

 //method call

 //if you want to make a lot of objects that look similar because have to keep difining methods
 console.log(rectangle.area());

 //constructor
 const Rectangle = function(width, height) {
   this.width = width;
   this.height = height;
 };

 //Shared method
 Rectangle.prototype.area = function() {
   return this.width * this.height;
 }

 //construction objects
 const small = new Rectangle(1, 2);
 const large = new Rectangle (10, 20);

//method calls
console.log(small.area());
console.log(large.area());
