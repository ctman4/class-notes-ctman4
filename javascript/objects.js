// Object and array syntax

//object literal
const point = {x:1, y:1};
console.log(point);
 //accessing properties
 console.log(point.x);

 //changing properties
 point.x = 3;

 //Nested object literal
 const circle= {
   center: point,
   radius: 4
 }

//access properties within objects(subproperties)
console.log(circle.center.x);

//Undefined subproperties
console.log(circle.color);
circle.color = 'blue';

console.log(circle);
