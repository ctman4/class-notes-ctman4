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

//array
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

//Accessing length and elements
for(let i=0; i < lenguages.length; i++){
  console.log(languages[i]);
}

//Changing elements in an array
languages[2] = 'JavaScript';

//Adding elements
language.push('MongoDB');

//Iterating over elements
for(const lang of languages){
  // make const because it is redeclared in each iteration
  console.log(lang);
}
